
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain import hub
from langchain.schema import StrOutputParser
from langchain.schema.runnable import RunnablePassthrough


def rag_model(request):
    loader = TextLoader("everything.md")
    docs = loader.load()

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200, add_start_index=True)
    all_splits = text_splitter.split_documents(docs)


    vectorstore = Chroma.from_documents(documents=all_splits, embedding=OpenAIEmbeddings())

    retriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 6})

    retrieved_docs = retriever.get_relevant_documents(request)

    llm = ChatOpenAI(model_name="gpt-3.5-turbo", temperature=0)

    prompt = hub.pull("rlm/rag-prompt")

    def format_docs(docs):
        return "\n\n".join(doc.page_content for doc in docs)


    rag_chain = (
        {"context": retriever | format_docs, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )
    result_chunks = []

    for chunk in rag_chain.stream(request):
        print(chunk, end="", flush=True)
        result_chunks.append(chunk)
    result = ''.join(result_chunks)
    return result

rag_model("How to expose API in TARDIS?")
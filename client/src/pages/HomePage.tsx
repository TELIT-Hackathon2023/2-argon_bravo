import {
  AppBar,
  Box,
  IconButton,
  Link,
  MenuItem,
  Popover,
  Select,
  Stack,
  SvgIcon,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import Chevron from "../assets/Chevron.png";
import ai_Icons from "../assets/ai_Icon.png";
import footerLogo from "../assets/footer-logo.png";
import lang from "../assets/lang.png";
import logo from "../assets/logo.png";
import searchInput from "../assets/search-input.png";
import telekom from "../assets/telekom.png";
import { itemsArray, tableOfContents } from "../utils/data";
import Tlogo from "../assets/Tlogo.png";
import Launch from "../assets/launch.png";
import g_translate from "../assets/g_translate.png";
import replay from "../assets/replay.png";

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <BasicPopover
        anchorEl={anchorEl}
        handleClose={handleClose}
        id={id}
        open={open}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#000", py: 3 }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="row" alignItems="center">
              <img src={logo} alt="logo" style={{ maxWidth: "80px" }} />

              <Stack direction="row" spacing={4.5} pl={10}>
                <Link href="#" underline="none" color="inherit">
                  Catalog
                </Link>
                <Link href="#" underline="none" color="inherit">
                  Documentation
                </Link>
                <Link href="#" underline="none" color="inherit">
                  Control
                </Link>
                <Link href="#" underline="none" color="inherit">
                  Mission Control
                </Link>
                <Link href="#" underline="none" color="inherit">
                  Horizon
                </Link>
                <Link href="#" underline="none" color="inherit">
                  TARDIS World
                </Link>
                <Link href="#" underline="none" color="inherit">
                  Tooling
                </Link>
              </Stack>
            </Stack>
            <Stack direction="row" gap={4}>
              <img src={searchInput} alt="search" />
              <IconButton
                onClick={handleClick}
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #1F222E",
                  p: "7px",
                  background: "#0F1112",
                }}
              >
                <img src={ai_Icons} alt="search" />
              </IconButton>
              <img
                src={lang}
                alt="search"
                style={{ width: "43px", height: "auto", objectFit: "contain" }}
              />
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Box display="flex" maxWidth="1100px" margin="0 auto" pt={5} gap={3}>
        <SideBar title="T‧AR‧D‧I‧S Customer Handbook" items={itemsArray} />
        <Box flex="1 1 auto">
          <Typography variant="h4">Chevron</Typography>
          <img src={Chevron} alt="Chevron" style={{ paddingTop: 30 }} />
          <Typography variant="h4">Before you begin</Typography>
          <Typography fontWeight="bold" pt={3}>
            Following abbreviation and names are used in the text below, and
            should be known to the reader:
          </Typography>

          <Stack direction="row" spacing={2} pt={3}>
            <Typography fontWeight="bold" minWidth="80px">
              ENI hub
            </Typography>
            <Typography>is the Service Hub Enterprise Integration</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography fontWeight="bold" minWidth="80px">
              T‧A‧R‧D‧I‧S
            </Typography>
            <Typography>
              is an internal product of ENI hub. The name stands for "Telekom
              architecture for decoupling and integration of services". It
              consists of infrastructure components supporting other teams in
              decoupling and integration of microservice-based applications.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography fontWeight="bold" minWidth="80px">
              Iris-Broker
            </Typography>
            <Typography>
              is the Identity-Provider component of T‧AR‧D‧I‧S, which is
              currently based on Keycloak
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography fontWeight="bold" minWidth="80px">
              Stargate
            </Typography>
            <Typography>
              is the API-Gateway component of T‧AR‧D‧I‧S, which is currently
              based on Kong
            </Typography>
          </Stack>
          <Typography pt={3} fontWeight="bold">
            Iris-Broker vs. Iris systems.
          </Typography>
          <Typography pt={3}>
            Chevron integrates with Iris-Broker, so in the following
            documentation we usually mean "Iris-Broker" when we talk about Iris.
          </Typography>
          <Typography variant="h4" pt={3}>
            What is Chevron?
          </Typography>
          <Typography pt={3}>
            Chevron is a tool that allows you to manage your API keys and access
            to services. It is a part of T‧AR‧D‧I‧S and is currently available
            on AWS and CaaS.
          </Typography>
        </Box>
        <SideBar title="Table of contents" items={tableOfContents} />
      </Box>
      <AppBar
        position="static"
        sx={{ background: "#000", py: 3, mb: -3, mt: 4 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={footerLogo}
            alt="logo"
            style={{ position: "absolute", left: 25 }}
          />
          <Stack>© 2023 Deutsche Telekom IT GmbH</Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HomePage;

interface SideBarProps {
  title: string;
  items: string[];
}

const SideBar = ({ title, items }: SideBarProps) => {
  return (
    <Stack minWidth="200px">
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      {items.map((item) => (
        <Typography key={item}>{item}</Typography>
      ))}
    </Stack>
  );
};

interface BasicPopoverProps {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
}

const BasicPopover = ({
  id,
  open,
  anchorEl,
  handleClose,
}: BasicPopoverProps) => {
  const [select, setSelect] = useState<string>("10");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [inputContent, setInputContent] = useState<string>("");

  function handleRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsEmpty(false);
  }

  const [messages, setMessages] = useState<{ user: string; message: string }[]>(
    [
        {
            user: "chat",
            message: "Hello, I am T-Bot. How can I help you?"
        },
        {
            user: "user",
            message: "Hello, I am user. How can I help you?"
        }
    ]
  );

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack p={3} sx={{ width: "600px" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h4" fontWeight="bold">
              T-Bot{" "}
              <Typography
                component="span"
                variant="h4"
                sx={{ color: "#E20074" }}
              >
                Beta
              </Typography>
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Age"
              sx={{
                borderRadius: "11px",
                border: "1px solid rgba(113, 128, 150, 0.18)",
                height: "40px",
              }}
              onChange={(e) => setSelect(e.target.value as string)}
            >
              <MenuItem value={10}>Developer</MenuItem>
              <MenuItem value={20}>Manager</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Stack>

          {isEmpty && (
            <>
              <Typography color="#718096" fontWeight="medium">
                If you have any questions about the documentation, write here
                and the chat will be able to help you
              </Typography>
              <Stack margin="0 auto" pt={6} pb={3}>
                <img
                  src={telekom}
                  alt="telekom"
                  style={{ maxWidth: "180px" }}
                />
              </Stack>
              <Stack direction="row" gap={1}>
                <Stack spacing={1}>
                  <Prompt
                    title="What is TARDIS?"
                    desc="I know nothing about TARDIS"
                  />
                  <Prompt
                    title="How to expose API in TARDIS?"
                    desc="Exposing an API"
                  />
                </Stack>
                <Stack spacing={1}>
                  <Prompt
                    title="What can I use it for?"
                    desc="I know nothing about TARDIS"
                  />
                  <Prompt
                    title="How to start using CloudWalker?"
                    desc="CloudWalker"
                  />
                </Stack>
              </Stack>
            </>
          )}
          {!isEmpty && (
            <Stack
              flexDirection={"column"}
              spacing={"16px"}
              sx={{ pt: "10px" }}
            >
              {messages.map((message) => {
                if (message.user === "chat") {
                  return (
                    <Message
                      variant="chat"
                      message={message.message}
                      user={message.user}
                    />
                  );
                }
                return (
                  <Message
                    variant="user"
                    message={message.message}
                    user={message.user}
                  />
                );
              })}

            </Stack>
          )}
          <Stack pt={3}>
            <StyledTextField
              label="Enter your request"
              variant="outlined"
              value={inputContent}
              onChange={(e) => {
                setInputContent(e.target.value);
              }}
              InputProps={{
                sx: { borderRadius: "40px" },
                endAdornment: (
                  <IconButton
                    onClick={(e) => {
                      handleRequest(e);
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
          </Stack>
          <Typography textAlign="center" variant="caption" pt={1}>
            AI outputs can be misleading or wrong
          </Typography>
        </Stack>
      </Popover>
    </div>
  );
};

interface PromptProps {
  title: string;
  desc: string;
}

const Prompt = ({ title, desc }: PromptProps) => {
  return (
    <Box border="1px solid #E2E8F0" borderRadius="14px" px={2.5} py={1.8}>
      <Typography fontWeight="bold">{title}</Typography>
      <Typography>{desc}</Typography>
    </Box>
  );
};

function CloseIcon() {
  return (
    <SvgIcon sx={{ width: "30px", height: "30px" }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="black"
        />
      </svg>
    </SvgIcon>
  );
}

function Message({
  variant,
  message,
  user,
}: {
  variant: string;
  message: string;
  user: string;
}) {
  if (variant === "user") {
    return (
      <Stack
        sx={{
          borderRadius: "15px",
          border: "1px solid #E5E8EC",
          background: " rgba(229, 232, 236, 0.20)",
          display: "inline-flex",
          padding: " 10px 15px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "fit-content",
          marginLeft: "auto",
          alignSelf: "flex-end",
        }}
      >
        <Typography
          sx={{
            color: "#515B6A",
            fontFamily: "TeleGrotesk Next",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "700",
          }}
        >
          {user}
        </Typography>
        <Typography
          sx={{
            color: "#718096",
            fontFamily: "TeleGrotesk Next",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
          }}
        >
          {message}
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack direction={"row"} spacing={"10px"}>
      <img src={Tlogo} style={{ width: "38px", height: "38px" }} />
      <Box>
        <Stack
          sx={{
            borderRadius: "15px",
            border: "1px solid rgba(226, 0, 116, 0.38)",
            background: " rgba(229, 232, 236, 0.20)",
            display: "inline-flex",
            padding: " 10px 15px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "fit-content",
            marginLeft: "auto",
            alignSelf: "flex-end",
          }}
        >
          <Typography
            sx={{
              color: "#515B6A",
              fontFamily: "TeleGrotesk Next",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            {user}
          </Typography>
          <Typography
            sx={{
              color: "#718096",
              fontFamily: "TeleGrotesk Next",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            {message}
          </Typography>
        </Stack>
        <Stack spacing={"10px"} direction="row">
          <IconButton disableRipple>
            <img src={replay} alt="" width="18px" height="18px" />
          </IconButton>
          <IconButton disableRipple>
            <img src={g_translate} alt="" width="18px" height="18px" />
          </IconButton>
          <IconButton disableRipple>
            <img src={Launch} alt="" width="18px" height="18px" />
            <Typography sx={{ ml: "6px" }}>Show in text</Typography>
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
}

function SendIcon() {
  return (
    <SvgIcon>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.67124 20.4L21.1212 12.92C21.9312 12.57 21.9312 11.43 21.1212 11.08L3.67124 3.60002C3.01124 3.31002 2.28124 3.80002 2.28124 4.51002L2.27124 9.12002C2.27124 9.62002 2.64124 10.05 3.14124 10.11L17.2712 12L3.14124 13.88C2.64124 13.95 2.27124 14.38 2.27124 14.88L2.28124 19.49C2.28124 20.2 3.01124 20.69 3.67124 20.4Z"
          fill="#E20074"
        />
      </svg>
    </SvgIcon>
  );
}

const StyledTextField = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "#E20074",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#E20074",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E20074",
    },
    "&:hover fieldset": {
      borderColor: "#E20074",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#E20074",
    },
  },
}));

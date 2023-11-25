import { Box, AppBar, Toolbar, Link, Stack, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import searchInput from '../assets/search-input.png';
import lang from '../assets/lang.png';
import Chevron from '../assets/Chevron.png';
import { itemsArray, tableOfContents } from '../utils/data';

const HomePage = () => {
    return (
        <Box padding={0} margin={0} boxSizing='border-box'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' sx={{ background: '#000', py: 3 }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Stack direction='row' alignItems='center'>
                            <img src={logo} alt='logo' style={{ maxWidth: '80px' }} />

                            <Stack direction='row' spacing={4.5} pl={10}>
                                <Link href='#' underline='none' color='inherit'>
                                    Catalog
                                </Link>
                                <Link href='#' underline='none' color='inherit'>
                                    Documentation
                                </Link>
                                <Link href='#' underline='none' color='inherit'>
                                    Control
                                </Link>
                                <Link href='#' underline='none' color='inherit'>
                                    Mission Control
                                </Link>
                                <Link href='#' underline='none' color='inherit'>
                                    Horizon
                                </Link>
                                <Link href='#' underline='none' color='inherit'>
                                    TARDIS World
                                </Link>
                                <Link href='#' underline='none' color='inherit'>
                                    Tooling
                                </Link>
                            </Stack>
                        </Stack>
                        <Stack direction='row' gap={4}>
                            <img src={searchInput} alt='search' />
                            <img
                                src={lang}
                                alt='search'
                                style={{ width: '43px', height: 'auto', objectFit: 'contain' }}
                            />
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box display='flex' maxWidth='1100px' margin='0 auto' pt={5} gap={3}>
                <SideBar title='T‧AR‧D‧I‧S Customer Handbook' items={itemsArray} />
                <Box flex='1 1 auto'>
                    <Typography variant='h4'>Chevron</Typography>
                    <img src={Chevron} alt='Chevron' style={{ paddingTop: 30 }} />
                    <Typography variant='h4'>Before you begin</Typography>
                    <Typography fontWeight='bold' pt={3}>
                        Following abbreviation and names are used in the text below, and should be
                        known to the reader:
                    </Typography>

                    <Stack direction='row' spacing={2} pt={3}>
                        <Typography fontWeight='bold' minWidth='80px'>
                            ENI hub
                        </Typography>
                        <Typography>is the Service Hub Enterprise Integration</Typography>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Typography fontWeight='bold' minWidth='80px'>
                            T‧A‧R‧D‧I‧S
                        </Typography>
                        <Typography>
                            is an internal product of ENI hub. The name stands for "Telekom
                            architecture for decoupling and integration of services". It consists of
                            infrastructure components supporting other teams in decoupling and
                            integration of microservice-based applications.
                        </Typography>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Typography fontWeight='bold' minWidth='80px'>
                            Iris-Broker
                        </Typography>
                        <Typography>
                            is the Identity-Provider component of T‧AR‧D‧I‧S, which is currently
                            based on Keycloak
                        </Typography>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Typography fontWeight='bold' minWidth='80px'>
                            Stargate
                        </Typography>
                        <Typography>
                            is the API-Gateway component of T‧AR‧D‧I‧S, which is currently based on
                            Kong
                        </Typography>
                    </Stack>
                    <Typography pt={3} fontWeight='bold'>
                        Iris-Broker vs. Iris systems.
                    </Typography>
                    <Typography pt={3}>
                        Chevron integrates with Iris-Broker, so in the following documentation we
                        usually mean "Iris-Broker" when we talk about Iris.
                    </Typography>
                    <Typography variant='h4' pt={3}>
                        What is Chevron?
                    </Typography>
                    <Typography pt={3}>
                        Chevron is a tool that allows you to manage your API keys and access to
                        services. It is a part of T‧AR‧D‧I‧S and is currently available on AWS and
                        CaaS.
                    </Typography>
                </Box>
                <SideBar title='Table of contents' items={tableOfContents} />
            </Box>
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
        <Stack minWidth='200px'>
            <Typography variant='h6' fontWeight='bold'>
                {title}
            </Typography>
            {items.map((item) => (
                <Typography key={item}>{item}</Typography>
            ))}
        </Stack>
    );
};

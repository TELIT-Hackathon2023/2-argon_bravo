import { createTheme } from '@mui/material';
import TeleGroteskNextBoldWoff from './fonts/TeleGroteskNextBold.woff';
import TeleGroteskNextBoldWoff2 from './fonts/TeleGroteskNextBold.woff2';
import TeleGroteskNextMediumWoff from './fonts/TeleGroteskNextMedium.woff';
import TeleGroteskNextMediumWoff2 from './fonts/TeleGroteskNextMedium.woff2';
import TeleGroteskNextRegularWoff from './fonts/TeleGroteskNextRegular.woff';
import TeleGroteskNextRegularWoff2 from './fonts/TeleGroteskNextRegular.woff2';

export const theme = createTheme({
    typography: {
        fontFamily: 'TeleGroteskNext',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'TeleGroteskNext';
                    src: url(${TeleGroteskNextBoldWoff2}) format('woff2'),
                        url(${TeleGroteskNextBoldWoff}) format('woff');
                    font-weight: bold;
                    font-style: normal;
                    font-display: swap;
                }

                @font-face {
                    font-family: 'TeleGroteskNext';
                    src: url(${TeleGroteskNextMediumWoff2}) format('woff2'),
                        url(${TeleGroteskNextMediumWoff}) format('woff');
                    font-weight: medium;
                    font-style: normal;
                    font-display: swap;
                }

                @font-face {
                    font-family: 'TeleGroteskNext';
                    src: url(${TeleGroteskNextRegularWoff2}) format('woff2'),
                        url(${TeleGroteskNextRegularWoff}) format('woff');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }
            `,
        },
    },
});

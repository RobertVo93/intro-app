import { BreakpointsOptions } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';

import { white, backgroundColor, themeColor } from './palette';

const typography = {
  fontFamily: ['Inter', 'sans-serif'].join(',')
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        color: '#002042',
        bgColor: white,
        border: `1px solid #002042`,
        fontWeight: 600,
      }
    }
  },
};

const shape = {
  borderRadius: 0
};

const lightTheme = (fontFamily?: string, breakpoints?: BreakpointsOptions) =>
  createTheme({
    typography: fontFamily ? { fontFamily } : typography,
    components,
    shape,
    breakpoints: breakpoints,
    palette: {
      mode: 'light',
      background: {
        default: backgroundColor,
        paper: backgroundColor
      },
      primary: {
        main: themeColor
      },
      text: {
        primary: white,
      }
    }
  });

export { lightTheme };

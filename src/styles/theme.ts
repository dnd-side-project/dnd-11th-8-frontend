import { createTheme } from '@mui/material/styles';

// 색상은 제가 임의로 정해논겁니다!
export const theme = createTheme({
  palette: {
    primary: {
      main: '#4AD395',
    },
    secondary: {
      main: '#FF4081',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
});

import {CssVarsProvider, extendTheme} from '@mui/joy/styles';
import {primaryColor} from "../config";

const joyTheme = extendTheme({
  fontFamily: {
    body: 'Noto Sans KR',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
          '&:hover': {
            backgroundColor: '#d44402'
          },
        }
      }
    },
    JoyInput: {
      styleOverrides: {
        root: {
          '&:focus-within': {
            '--Input-focusedHighlight': primaryColor,
            // border: `1px solid ${primaryColor}`,
            // outline: `1px solid ${primaryColor}`,
            // outlineOffset: '2px',
          },
        }
      }
    }
  }
});

export default joyTheme;

// function App() {
//     return (
//         <CssVarsProvider theme={chakraTheme}>
//             <Button>Solid</Button>
//             ...other buttons
//         </CssVarsProvider>
//     );
// };
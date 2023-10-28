import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";
import {CssVarsProvider, extendTheme} from '@mui/joy/styles';
import "./App.css";
import joyTheme from "./theme";
import {StyledEngineProvider} from '@mui/material/styles';
import {
    useColorScheme as useMaterialColorScheme,
    Experimental_CssVarsProvider as MaterialCssVarsProvider,
    experimental_extendTheme as extendMaterialTheme,
    THEME_ID
} from "@mui/material/styles";
import {
    CssVarsProvider as JoyCssVarsProvider,
    useColorScheme as useJoyColorScheme
} from "@mui/joy/styles";
import {primaryColor} from "./config";

const App = () => {

    const materialTheme = extendMaterialTheme();
    materialTheme.components = {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "inherit"
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    paddingTop: "0px",
                    paddingBottom: '0px',
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto",
                    '&.Mui-selected': {
                        color: 'white',
                        backgroundColor: primaryColor,
                        '&:hover': {
                            backgroundColor: '#d44402'
                        },
                    },
                },

            }
        }
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <MaterialCssVarsProvider theme={{[THEME_ID]: materialTheme}}>
                    <JoyCssVarsProvider theme={joyTheme}>
                        <ScrollToTop/>
                        <Router/>
                    </JoyCssVarsProvider>
                </MaterialCssVarsProvider>
            </StyledEngineProvider>
        </>
    );
};

export default App;

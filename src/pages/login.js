import React from "react";
import LoginPage from "../components/login.component";
import LanguageSwitcher from "../components/generalComponents/LanguageSwitcher";
import ColorModeToggle from "../components/generalComponents/ColorModeToggle";
import theme from '../gatsby-plugin-theme-ui/index'
import { ThemeUIProvider } from 'theme-ui'


const Login = () => {

    return (
        <div>
            <ThemeUIProvider theme={theme}>

                <LanguageSwitcher></LanguageSwitcher>
                <ColorModeToggle></ColorModeToggle>
                <LoginPage></LoginPage>

            </ThemeUIProvider>


        </div>

    )
}

export default Login
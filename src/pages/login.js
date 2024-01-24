import React from "react";
import LoginPage from "../components/login.component";
import LanguageSwitcher from "../components/generalComponents/LanguageSwitcher";
import ColorModeToggle from "../components/generalComponents/ColorModeToggle";


const Login = () => {

    return (
        <div>
            <LanguageSwitcher></LanguageSwitcher>
            <ColorModeToggle></ColorModeToggle>
            <LoginPage></LoginPage>
            
        </div>

    )
}

export default Login
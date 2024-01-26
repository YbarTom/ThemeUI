import React from "react";
import { logout } from "../../services/auth";
import {Button} from 'theme-ui'
import { useTranslation } from 'react-i18next';

const LogOut = () => {
    const { t } = useTranslation();
    return(
        <Button sx={{ variant: 'buttons.primary' }} onClick={() => logout()}>{t('logout')}</Button>
    );

};

export default LogOut;
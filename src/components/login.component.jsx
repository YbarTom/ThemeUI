// src/pages/login.js
import React, { useState, useEffect } from 'react';
import { Container, Input, Button, Label, Flex } from 'theme-ui'
import { useTranslation } from 'react-i18next';
import { handleLogin, isLoggedIn } from "../services/auth"
import { navigate } from "gatsby"
import theme from '../gatsby-plugin-theme-ui/index'
import { ThemeUIProvider } from 'theme-ui'

const LoginPage = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    // Check if user is already logged in
    if (isLoggedIn()) {
      navigate(`/app`);
    }
  }, []);

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    name === 'user' ? setUser(value) : setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Attempt to login
    const loginSuccess = handleLogin(user, password);

    if (loginSuccess) {
      // Redirect to the desired page after successful login
      navigate(`/app`);
    } else {
      // Handle unsuccessful login (e.g., show an error message)
      console.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <ThemeUIProvider theme={theme}>
        <Container p={4}>
      <Flex
        as="form"  // Set the form element directly on Flex
        onSubmit={handleSubmit}  // Handle form submission
        sx={{
          flexDirection: 'column',
          maxWidth: '300px',
          margin: '0 auto',
        }}
      >
        <Label htmlFor="username">{t('email')}</Label>
        <Input
          id="username"
          name="user"  // Set the name attribute for form data
          mb={3}
          value={user}
          onChange={handleUpdate}
        />

        <Label htmlFor="password">{t('password')}</Label>
        <Input
          type="password"
          id="password"
          name="password"  // Set the name attribute for form data
          mb={3}
          value={password}
          onChange={handleUpdate}
        />

        <Button
          type="submit"
          sx={{ variant: 'buttons.primary' }}
        >
          {t('login')}
        </Button>
      </Flex>
    </Container>
    </ThemeUIProvider>
    
  )
}

export default LoginPage;

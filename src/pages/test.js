// src/pages/index.js

import React from 'react';
import { ThemeUIProvider, Button, Link, Text, Layout  } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui/index'; // Update the path

const IndexPage = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <div>
        <Text  sx={{ variant: 'text.myCustomText' }}>Gatsby Page with Custom Components</Text >

        <Button sx={{ variant: 'buttons.custom' }}>Primary Button</Button>



        <Link  href="#" sx={{ variant: 'links.myCustomLink' }}>
          Custom Link
        </Link >

        <Text  sx={{ variant: 'styles.myCustomStyle' }}>Custom Styled Paragraph</Text >

      </div>
    </ThemeUIProvider>
  );
};

export default IndexPage;

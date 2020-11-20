import React from 'react';
import { Box, Container, Divider, Typography } from '@material-ui/core';
import MenuBar from 'components/MenuBar';
import Header from 'components/Header';
import Portfolio from 'components/Portfolio';
import FooterBar from 'components/FooterBar';

function App() {
  return (
    <Box>
      <MenuBar />
      <Header />
      <Portfolio />
      <FooterBar />
    </Box >
  );
}

export default App;
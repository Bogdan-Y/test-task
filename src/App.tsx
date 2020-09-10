import React from 'react';
import { ThemeProvider } from 'styled-components';
import ClientProfile from './components/ClientProfile';
import theme from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <ClientProfile />
  </ThemeProvider>
);

export default App;

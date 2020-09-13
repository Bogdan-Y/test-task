import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApiProvider } from './ApiContext';
import ClientProfile from './components/ClientProfile';
import theme from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <ApiProvider>
      <ClientProfile />
    </ApiProvider>
  </ThemeProvider>
);

export default App;

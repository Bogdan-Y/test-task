import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ClientProfile from './components/ClientProfile';
import theme from './theme';

import { ClientProfileServiceClient } from './grpc/client_profile_service_pb';
import { ClientProfileRequest } from './grpc/client_profile_pb'

const App: React.FC = () => {

  useEffect(() => {
    const clientProfileService = new ClientProfileServiceClient('http://localhost:9090', null, null);

    const getClientProfile = (id: number) => {
      const clientProfileRequest = new ClientProfileRequest();
      clientProfileRequest.setId(id);

      return clientProfileService.getClientProfileById(clientProfileRequest, {})
        .then((response) => {
          // const clientProfile = new ClientProfile();
          // clientProfile.content(response.getContent());
          console.log(response.getAge());
        })
        .catch((err) => {
          console.log(err);
          new Error(err.message);
        })
      };

    getClientProfile(1);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ClientProfile />
    </ThemeProvider>
  )
};

export default App;

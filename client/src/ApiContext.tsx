import React, { ReactNode, useContext } from 'react';
import { ApiServiceClient } from './grpc/ApiServiceClientPb';
import clientProfileApi from './services/api/client-profile-api';

interface ApiProviderProps {
  children: ReactNode;
}

const HostName = 'http://localhost:9090';
const ApiContext = React.createContext(null);

export const useGrpcApi = (): any => useContext(ApiContext);

export const apiService = new ApiServiceClient(HostName, null, null);

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const api: any = {
    clientProfile: clientProfileApi,
  };

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
};

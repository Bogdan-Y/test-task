import React, { ReactNode, useContext } from 'react';
import { ApiServiceClient } from './proto/ApiServiceClientPb';
import clientProfileApi from './services/api/client-profile-api';

const HostName = 'http://localhost:9090';
export const apiService = new ApiServiceClient(HostName, null, null);

const api = {
  clientProfile: clientProfileApi,
};

type GrpcApi = typeof api;

const ApiContext = React.createContext({} as GrpcApi);
export const useGrpcApi = (): GrpcApi => useContext(ApiContext);

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
};

import React, { ReactNode, useContext } from 'react';
import { ApiServiceClient } from './proto/ApiServiceClientPb';
import { getClientProfileApi } from './services/api/client-profile-api';

const HostName = 'http://localhost:9090';
const apiService = new ApiServiceClient(HostName, null, null);

const api = {
  clientProfile: getClientProfileApi(apiService),
};

type GrpcApi = typeof api;

const ApiContext = React.createContext({} as GrpcApi);
export const useGrpcApi = (): GrpcApi => useContext(ApiContext);

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => (
  <ApiContext.Provider value={api}>
    {children}
  </ApiContext.Provider>
);

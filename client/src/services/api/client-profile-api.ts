import * as grpcWeb from 'grpc-web';
import { ClientProfileRequest, ClientProfileResponse } from '../../proto/api_pb';
import { ApiServiceClient } from '../../proto/ApiServiceClientPb';

export type ClientProfileModel = ClientProfileResponse.AsObject;

export const getClientProfileApi = (apiService: ApiServiceClient) => {
  const getById = (id: number): Promise<ClientProfileModel> => {
    const clientProfileRequest = new ClientProfileRequest();
    clientProfileRequest.setId(id);

    return apiService.getClientProfileById(clientProfileRequest, {})
      .then((response: ClientProfileResponse) => response.toObject())
      .catch((err: grpcWeb.Error) => {
        throw new Error(err.message);
      });
  };

  return {
    getById,
  };
};

import * as grpcWeb from 'grpc-web';
import { ClientProfileRequest, ClientProfileResponse } from '../../proto/api_pb';
import { apiService } from '../../ApiContext';

export interface ClientProfileModel extends ClientProfileResponse.AsObject {}

const getById = (id: number): Promise<ClientProfileModel> => {
  const clientProfileRequest = new ClientProfileRequest();
  clientProfileRequest.setId(id);

  return apiService.getClientProfileById(clientProfileRequest, {})
    .then((response: ClientProfileResponse) => response.toObject())
    .catch((err: grpcWeb.Error) => {
      throw new Error(err.message);
    });
};

const clientProfileApi = {
  getById,
};

export default clientProfileApi;

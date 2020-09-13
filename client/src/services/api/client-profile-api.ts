import { ClientProfileRequest, ClientProfileResponse } from '../../grpc/api_pb';
import { apiService } from '../../ApiContext';
import * as grpcWeb from "grpc-web";

export interface IClientProfile extends ClientProfileResponse.AsObject {}

const getById = (id: number): Promise<IClientProfile  | Error> => {
  const clientProfileRequest = new ClientProfileRequest();
  clientProfileRequest.setId(id);

  return apiService.getClientProfileById(clientProfileRequest, {})
    .then((response: ClientProfileResponse) => response.toObject())
    .catch((err: grpcWeb.Error) => new Error(err.message));
};

const clientProfileApi = {
  getById
};

export default clientProfileApi;

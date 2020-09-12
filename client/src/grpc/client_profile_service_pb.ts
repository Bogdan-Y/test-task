/**
 * @fileoverview gRPC-Web generated client stub for clientProfile
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as client_profile_pb from './client_profile_pb';


export class ClientProfileServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetClientProfileById = new grpcWeb.AbstractClientBase.MethodInfo(
    client_profile_pb.ClientProfileResponse,
    (request: client_profile_pb.ClientProfileRequest) => {
      return request.serializeBinary();
    },
    client_profile_pb.ClientProfileResponse.deserializeBinary
  );

  getClientProfileById(
    request: client_profile_pb.ClientProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<client_profile_pb.ClientProfileResponse>;

  getClientProfileById(
    request: client_profile_pb.ClientProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: client_profile_pb.ClientProfileResponse) => void): grpcWeb.ClientReadableStream<client_profile_pb.ClientProfileResponse>;

  getClientProfileById(
    request: client_profile_pb.ClientProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: client_profile_pb.ClientProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/clientProfile.ClientProfileService/GetClientProfileById',
        request,
        metadata || {},
        this.methodInfoGetClientProfileById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/clientProfile.ClientProfileService/GetClientProfileById',
    request,
    metadata || {},
    this.methodInfoGetClientProfileById);
  }

}


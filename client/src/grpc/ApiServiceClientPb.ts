/**
 * @fileoverview gRPC-Web generated client stub for apiService
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as api_pb from './api_pb';


export class ApiServiceClient {
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
    api_pb.ClientProfileResponse,
    (request: api_pb.ClientProfileRequest) => {
      return request.serializeBinary();
    },
    api_pb.ClientProfileResponse.deserializeBinary
  );

  getClientProfileById(
    request: api_pb.ClientProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<api_pb.ClientProfileResponse>;

  getClientProfileById(
    request: api_pb.ClientProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: api_pb.ClientProfileResponse) => void): grpcWeb.ClientReadableStream<api_pb.ClientProfileResponse>;

  getClientProfileById(
    request: api_pb.ClientProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: api_pb.ClientProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/apiService.ApiService/GetClientProfileById',
        request,
        metadata || {},
        this.methodInfoGetClientProfileById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/apiService.ApiService/GetClientProfileById',
    request,
    metadata || {},
    this.methodInfoGetClientProfileById);
  }

}


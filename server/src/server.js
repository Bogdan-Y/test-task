const path = require('path');
const assert = require('assert');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const registerClientProfileProcedures = require('./procedures/client-profile');

const PROTO_PATH = path.resolve(__dirname, '../../protos/api.proto');

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const apiService = protoDescriptor.apiService;
const server = new grpc.Server();

registerClientProfileProcedures(server, apiService);

server.bindAsync(
'0.0.0.0:8081', grpc.ServerCredentials.createInsecure(), (err) => {
  assert.ifError(err);
    console.log("server start");
    server.start();
});


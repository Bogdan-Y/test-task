const PROTO_PATH = '../protos/api.proto';

const assert = require('assert');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
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
const clientProfile = protoDescriptor.apiService;
const { getClientProfile } = require('./data/client-profile');

const server = new grpc.Server();

server.addService(clientProfile.ApiService.service, {
  GetClientProfileById: function(call,callback) {
    const clientProfile = getClientProfile();

    return callback(null, clientProfile)
  }
});

server.bindAsync(
'0.0.0.0:8081', grpc.ServerCredentials.createInsecure(), (err, port) => {
  assert.ifError(err);
    console.log("server start");
    server.start();
});


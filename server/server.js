const PROTO_PATH = '../protos/client_profile.proto';

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
const clientProfile = protoDescriptor.clientProfile;

const server = new grpc.Server();

server.addService(clientProfile.ClientProfileService.service, {
  GetClientProfileById: function(call,callback) {
    console.log("Request");
    return callback(null, {age: 26})
  }
});

server.bindAsync(
'0.0.0.0:8081', grpc.ServerCredentials.createInsecure(), (err, port) => {
  assert.ifError(err);
    console.log("server start");
    server.start();
});


// /**
//  * @param {!Object} call
//  * @return {!Object} metadata
//  */
// function copyMetadata(call) {
//   const metadata = call.metadata.getMap();
//   const response_metadata = new grpc.Metadata();
//
//   for (let key in metadata) {
//     response_metadata.set(key, metadata[key]);
//   }
//
//   return response_metadata;
// }
//
// /**
//  * @param {!Object} call
//  * @param {function():?} callback
//  */
// function doGetClientProfileById(call, callback) {
//   callback(null, {
//     message: call.request.message
//   }, copyMetadata(call));
// }
//
// function getServer() {
//   const server = new grpc.Server();
//
//   server.addService(clientProfile.ClientProfileService.service, {
//     echo: doGetClientProfileById
//   });
//
//   return server;
// }
//
// if (require.main === module) {
//   var echoServer = getServer();
//   echoServer.bindAsync(
//     '0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
//       assert.ifError(err);
//       echoServer.start();
//     });
// }
//
// exports.getServer = getServer;

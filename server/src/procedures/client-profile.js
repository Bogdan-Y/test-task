const { getClientProfileById } = require('../mock-data/client-profile');

const registerClientProfileProcedures = (server, apiService) => {
  server.addService(apiService.ApiService.service, {
    GetClientProfileById: function(call,callback) {
      const id = call.request.id;
      const clientProfile = getClientProfileById(id);

      return callback(null, clientProfile)
    }
  });
};

module.exports = registerClientProfileProcedures;

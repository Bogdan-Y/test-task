## Installation

### Before starting make sure you have the following installed:
- Docker
- Node.js (v12.18.0)

### Install gRPC-Web protoc plugin

To generate the gRPC-Web service client stub, 
first you need the gRPC-Web protoc plugin. To compile the plugin 
protoc-gen-grpc-web, you need to run this from the repo’s root directory:

```sh
git clone https://github.com/grpc/grpc-web

cd grpc-web

sudo make install-plugin
```

### Project installation
In the project directory:

#### 1. Install project dependency
```sh
npm run install-dependency
```

#### 2. Launch envoy and node service:
```sh
docker-compose pull
docker-compose up --build
docker-compose down
```

### Run client
```sh
npm start
```


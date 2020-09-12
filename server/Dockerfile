FROM grpcweb/prereqs

ENV ROOTDIR /usr/src/app

WORKDIR $ROOTDIR

COPY frontend/package*.json $ROOTDIR/
RUN npm ci

COPY server.js $ROOTDIR/

EXPOSE 9090
CMD ["node", "server.js"]

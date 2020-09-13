FROM node:12.18.0

ENV ROOTDIR /usr/src/app/server

RUN mkdir -p $ROOTDIR

WORKDIR $ROOTDIR

COPY server/package*.json ./
RUN npm ci

CMD ["npm", "start"]

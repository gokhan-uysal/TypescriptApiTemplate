FROM node:19-alpine3.15

WORKDIR /Server

COPY package*.json ./
COPY ./ .
RUN npm install
EXPOSE 3000
CMD [ "node", "./src/app.ts" ]

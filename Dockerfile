FROM node:19-alpine3.15

WORKDIR /Server

COPY package*.json ./
COPY ./ .
RUN npm install
EXPOSE 3000
RUN node run build
CMD ["node", "start"]
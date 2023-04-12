FROM node:19-alpine3.15

WORKDIR /Server

COPY ./package*.json /Server/
COPY ./tsconfig.json /Server/
COPY ./src/ /Server/src/

RUN npm install
RUN npm run build
RUN rm -rf /Server/src

CMD ["npm", "start"]
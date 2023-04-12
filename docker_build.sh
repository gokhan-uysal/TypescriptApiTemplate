#!/bin/bash

echo 'Creating docker image...'
docker build -t server-image .
echo 'Running docker image...'
export PORT=8000
docker run -d --name server --env-file ./.env -p $PORT:$PORT server-image
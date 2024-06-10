#!/bin/bash

docker-compose up --build -d
docker exec -it kb bash "/home/build.sh"

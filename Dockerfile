# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=23.8.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY . ./

RUN npm install nodemon -g

EXPOSE 48256

CMD ["npm", "run", "dev"]

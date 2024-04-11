ARG NODE_VERSION=19.9.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
RUN npm run build



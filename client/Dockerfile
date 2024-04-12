ARG NODE_VERSION=19.9.0
#stage1
FROM node:${NODE_VERSION}-alpine AS builder
ARG DOCKER_ENV=dev
ENV NODE_ENV=$DOCKER_ENV
WORKDIR /app
COPY package.json .
COPY . .
COPY ./.env ./.env
RUN npm install
RUN npm run build
#stage2
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "start"]


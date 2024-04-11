ARG NODE_VERSION=19.9.0
#stage1
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
RUN npm run build
#stage2
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "start"]


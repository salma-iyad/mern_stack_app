# Stage1
ARG NODE_VERSION=19.9.0
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Stage2
FROM node:${NODE_VERSION}-alpine
WORKDIR /app

RUN apk add --no-cache mongodb-tools && \
    npm install -g nodemon

COPY --from=builder /app .

EXPOSE 5000

CMD ["nodemon", "app.js"]

ARG NODE_VERSION=19.9.0
FROM node:${NODE_VERSION}-alpine

# Install MongoDB tools
RUN apk add --no-cache mongodb-tools

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 5000
CMD ["npm", "start"]

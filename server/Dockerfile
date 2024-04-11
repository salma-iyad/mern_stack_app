ARG NODE_VERSION=19.9.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]
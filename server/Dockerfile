ARG NODE_VERSION=19.9.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY package.json .
COPY . .
RUN for i in 1 2 3; do npm install && s=0 && break || s=$?; sleep 10; done; (exit $s)
EXPOSE 5000
CMD ["npm", "start"]
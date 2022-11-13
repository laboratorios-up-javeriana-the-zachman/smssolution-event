FROM --platform=linux/amd64 node:14-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
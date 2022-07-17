FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application itself
COPY ./server.js .

CMD [ "node", "server.js" ]
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application itself
COPY ./balancer.js .

EXPOSE 80

CMD [ "node", "balancer.js" ]


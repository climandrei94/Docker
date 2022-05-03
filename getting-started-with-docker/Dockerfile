FROM node:current-alpine

# Create directory in container image for app code
RUN mkdir -p /usr/src/app

# Copy app code in container image
COPY ./src /usr/src/app

# Set working directory context
WORKDIR /usr/src/app

# Install dependecies from packages.json
RUN npm install

# Command for container to execute
ENTRYPOINT ["node", "index.js"]

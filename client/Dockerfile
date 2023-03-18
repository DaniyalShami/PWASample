# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Installing workbox
RUN npm install -g workbox-cli

# Copy the rest of the app code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Set the environment variable for the Node.js server
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]

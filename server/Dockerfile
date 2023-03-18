# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the app code to the working directory
COPY . .

# Expose the port the app will run on
EXPOSE 3001

# Start the Express server
CMD ["npm", "start"]

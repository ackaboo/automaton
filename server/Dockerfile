# Use Node.js LTS version as base image
FROM node:lts

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to container
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
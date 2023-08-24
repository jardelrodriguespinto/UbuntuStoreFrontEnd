# Use the official Node.js image as the base image
FROM node:14


# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files into the container
COPY . .

# Build the React app
RUN npm run build

# Expose a port (e.g., 80) for the web server
EXPOSE 80

# Start the web server when the container starts
CMD [ "npm", "start" ]

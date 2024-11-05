# Use an official Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the app
RUN npm run build

# Set the environment variable to serve the build folder
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npx", "serve", "-s", "build"]
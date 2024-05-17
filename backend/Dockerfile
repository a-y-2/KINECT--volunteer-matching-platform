# FROM node:18-alpine AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npm run build 

# FROM node:18-alpine

# WORKDIR /app

# COPY . .

# EXPOSE 3000  

# CMD [ "npm", "run", "start:prod" ]  

# Use a multi-stage build to reduce image size
# Stage 1: Install dependencies and build the app
# Stage 1: Build the NestJS application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application source
COPY . .

# Build the NestJS application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the build output and other necessary files from the build stage
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/main.js"]

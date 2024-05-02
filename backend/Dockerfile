FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build     # Build your NestJS backend

FROM node:18-alpine

WORKDIR /app

COPY . .

EXPOSE 3000          # Port for NestJS backend

CMD [ "npm", "start:prod" ]  # Start NestJS in production mode


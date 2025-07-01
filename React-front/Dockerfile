# Base image
FROM node:18 as build

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy all source code and build
COPY . .
RUN npm run build

# Serve using Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

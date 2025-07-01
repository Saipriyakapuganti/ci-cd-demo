# Base image for building
FROM node:18 as build

WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Accept build-time API URL
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Copy source and build
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


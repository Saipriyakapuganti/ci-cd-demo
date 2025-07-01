# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port (adjust if your app uses a different one)
EXPOSE 5000

# Run the app
CMD ["node", "app.js"]


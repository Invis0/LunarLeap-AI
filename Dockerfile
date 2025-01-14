FROM node:20-slim

# Install Python and build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python-is-python3 \
    make \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV ESBUILD_BINARY_PATH=/app/node_modules/esbuild/bin/esbuild
ENV PATH /app/node_modules/.bin:$PATH

# Copy package files
COPY package*.json ./
COPY .npmrc ./

# Install dependencies with development packages
ENV NODE_ENV=development
RUN npm install
RUN npm install -g vite

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Switch to production and clean up
ENV NODE_ENV=production
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"] 
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

# Install dependencies and update lock file
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Clean up dev dependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"] 
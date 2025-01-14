# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./
COPY .npmrc ./

# Install dependencies with platform-specific binaries
ENV ROLLUP_SKIP_NODE_RESOLUTION=true
RUN npm install --platform=linux --arch=x64 \
    && npm rebuild \
    && npm install @rollup/rollup-linux-x64-gnu

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-slim

WORKDIR /app

# Copy built assets
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install production dependencies only
RUN npm install --omit=dev --no-optional --ignore-scripts

# Expose port
EXPOSE 3000

# Start the application
CMD ["npx", "serve", "-s", "dist", "-l", "3000"] 
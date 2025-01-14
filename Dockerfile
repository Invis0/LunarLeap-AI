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

# Install dependencies
RUN npm install --no-optional

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
COPY --from=builder /app/.npmrc ./

# Install production dependencies only
RUN npm install --omit=dev --no-optional

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"] 
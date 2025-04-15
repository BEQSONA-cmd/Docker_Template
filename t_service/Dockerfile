# Use the official Debian image from the Docker Hub, version bullseye-slim
FROM debian:bullseye-slim

# Set the dependency for the Node.js version
RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the application files from the host to the container's /app directory
COPY ./app /app

# install the application packages
RUN npm install

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]

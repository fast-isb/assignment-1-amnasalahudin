# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build

EXPOSE 3000
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV PRODUCTION
# Expose the port on which the app will be running (3000 is the default that `serve` uses)

# Start the app
CMD [ "npx", "serve", "build" ]
#CMD [ "npm", "start" ]
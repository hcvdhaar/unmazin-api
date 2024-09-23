# Only use this for production

# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package.json .

RUN npm install -g pnpm

# Install pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

RUN npx prisma generate

RUN npm run build


# Build the application
# RUN npm run build

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]

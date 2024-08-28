FROM node:20.17.0-alpine3.20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install pnpm 
RUN npm install -g pnpm

# Install app dependencies
RUN pnpm install

# Bundle app source
COPY . .

# Expose the port the app runs in
EXPOSE 3200

# Serve the app
CMD ["pnpm", "run", "dev"]


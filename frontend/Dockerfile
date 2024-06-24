# Use the Node.js image to build and run the Next.js app
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
# COPY package.json yarn.lock ./
# RUN yarn install

# Copy the rest of your Next.js app
COPY . .

# Build your Next.js app
# RUN yarn build

# Expose and start the server
EXPOSE 3000
# CMD ["yarn", "start"]

# Keeps the container running for now
CMD ["tail", "-f", "/dev/null"]

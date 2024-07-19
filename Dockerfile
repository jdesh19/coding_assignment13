# Use an official Node.js LTS image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that Storybook runs on (default is 6006)
EXPOSE 8083

# Run Storybook
CMD ["npm", "run", "storybook"]

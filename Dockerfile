FROM node:12.16.3-alpine
WORKDIR /app
COPY package*json ./
RUN yarn --force
COPY . .
EXPOSE 3000
CMD [ "yarn", "build" ]
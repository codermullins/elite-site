# Server build
FROM node:alpine3.18
WORKDIR /app
COPY . ./
WORKDIR /backend
COPY ./backend/ ./
RUN ls
RUN npm install
EXPOSE 4000
CMD node server
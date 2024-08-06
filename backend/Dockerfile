# Server build
FROM node:alpine3.18
WORKDIR /app
COPY ./backend/package*.json ./
RUN ls
RUN npm install
COPY ./backend/ ./
RUN ls
EXPOSE 4000
CMD node server
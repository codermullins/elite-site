FROM node:alpine3.18
WORKDIR /app
COPY ./backend/package.json ./backend/
RUN npm install
COPY ./backend/ /backend/
EXPOSE 4000
CMD ["cd", "/backend", "node", "server"]
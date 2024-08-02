FROM node:alpine3.18
WORKDIR /backend
COPY ./backend/package.json ./backend/
RUN cd /backend
RUN npm install
COPY ./backend/ /backend/
EXPOSE 4000
CMD ["cd", "/backend", "node", "server"]
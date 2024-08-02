FROM node:alpine3.18
WORKDIR /app
COPY ./backend ./backend/
RUN pwd
RUN npm install
EXPOSE 4000
CMD ["node", "server"]
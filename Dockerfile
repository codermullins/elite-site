FROM node:alpine3.18
WORKDIR /backend
COPY ./backend ./backend/
RUN cd /backend
RUN pwd
RUN npm install
EXPOSE 4000
CMD ["node", "server"]
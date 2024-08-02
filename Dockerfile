FROM node:alpine3.18
WORKDIR /app
COPY . ./
RUN cd ./backend
RUN npm install
EXPOSE 4000
CMD ["node", "server"]
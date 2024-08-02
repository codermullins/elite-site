FROM node:alpine3.18
WORKDIR /app
RUN pwd
COPY . ./
RUN ls
RUN cd ./backend
RUN ls
RUN npm install
EXPOSE 4000
CMD ["node", "server"]
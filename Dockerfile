FROM node:alpine3.18
WORKDIR /app
COPY . ./
RUN ls
WORKDIR /backend
COPY ./ ./
RUN ls
RUN npm install
EXPOSE 4000
CMD ["node", "server"]
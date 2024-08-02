FROM node:alpine3.18
WORKDIR /backend
COPY package.json /backend/
RUN npm install
COPY . /backend/
EXPOSE 4000
CMD ["node", "server"]
# Server build
FROM node:alpine3.18
WORKDIR /app
COPY . ./
WORKDIR /backend
COPY ./backend/ ./
RUN ls
RUN npm install

# Frontend build
FROM node:20-alpine as build
WORKDIR /frontend
COPY ./frontend/ ./ 
RUN npm ci
RUN npm run build

#serve the angular app
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *

#copy built angular
COPY --from=build /frontend/dist/elite-site/browser .

# change the back and run start script
WORKDIR /backend
RUN pwd
EXPOSE 4000 80
CMD npm run start
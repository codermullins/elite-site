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
RUN rm -rf *

#copy built angular
COPY --from=build /frontend/dist/elite-site/browser /usr/share/nginx/html

# change the back and run start script
WORKDIR /backend
EXPOSE 4000 80
CMD npm run start
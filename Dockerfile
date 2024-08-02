# Server build
FROM node:alpine3.18
WORKDIR /app
COPY . ./
WORKDIR /backend
COPY ./backend/ ./
RUN ls
RUN npm install
EXPOSE 4000
CMD ["npm run start"]

# Frontend build
FROM node:20-alpine as frontend
WORKDIR /frontend
COPY ./frontend/ ./ 
RUN npm ci
RUN npm run build

#serve the angular app
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *

#copy built angular
COPY --from=frontend ./frontend/dist/elite-site/browser /usr/share/nginx/html/

# change the back and run start script
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Frontend build
FROM node:20-alpine as frontend
WORKDIR /app
COPY . ./ 
WORKDIR /frontend
COPY ./frontend ./
RUN npm install
RUN ng build

#serve the angular app
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *

#copy built angular
COPY --from=frontend ./dist/elite-site/browser .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
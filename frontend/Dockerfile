# Frontend build
FROM node:18.17.1-alpine as build
WORKDIR /app
COPY ./frontend/package*.json ./ 
RUN npm ci
COPY ./frontend .
RUN npm run build

#serve the angular app
FROM nginx:latest
#copy built angular
COPY --from=build /app/elite-site /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
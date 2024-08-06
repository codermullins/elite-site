# Frontend build
FROM node:20-alpine as build
WORKDIR /app
COPY ./frontend/package*.json ./ 
RUN npm install
COPY ./frontend .
RUN ls
RUN npm run build

#serve the angular app
FROM nginx:latest
WORKDIR /usr/share/nginx/html
#copy built angular
COPY --from=build /app/elite-site /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
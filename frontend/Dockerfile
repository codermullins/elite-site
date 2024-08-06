# Frontend build
FROM node:20-alpine as frontend
WORKDIR /app
COPY ./frontend ./ 
RUN ls
RUN npm ci
RUN npm run build

#serve the angular app
FROM nginx:latest
COPY frontend/nginx.conf /etc/nginx/nginx.conf


#copy built angular
COPY --from=frontend /app/dist/elite-site /usr/share/nginx/html/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
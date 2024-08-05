# Frontend build
FROM node:20-alpine as frontend
WORKDIR /app
COPY ./frontend ./ 
RUN ls
RUN npm install
RUN npm run build

#serve the angular app
FROM nginx:latest
WORKDIR /usr/share/nginx/html/
RUN rm -rf *

#copy built angular
COPY --from=frontend ./frontend/dist/elite-site/browser /usr/share/nginx/html/
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# Frontend build
FROM node:20-alpine as build
WORKDIR /app
COPY ./frontend/package*.json ./ 
RUN npm install
COPY ./frontend .
RUN ls
RUN npm run build

#serve the angular app
FROM nginx:1.26-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
RUN ls
#copy built angular
COPY --from=build /app/dist/elite-site/browser /usr/share/nginx/html
RUN ls
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
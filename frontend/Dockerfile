# Frontend build
FROM node:20-alpine as frontend
WORKDIR /app
COPY . ./ 
WORKDIR /frontend
RUN npm install
RUN npm run build

#serve the angular app
FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf *

#copy built angular
COPY --from=frontend ./frontend/dist/elite-site/browser .

# change the back and run start script
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
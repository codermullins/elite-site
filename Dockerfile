# # Server build
# FROM node:alpine3.18
# WORKDIR /app
# COPY . ./
# WORKDIR /backend
# COPY ./backend/ ./
# RUN npm install
# EXPOSE 4000
# CMD ["npm", "run", "start"]

# Frontend build
FROM node:20-alpine as build
WORKDIR /frontend
COPY ./frontend/ ./ 
RUN npm ci
RUN npm run build

#serve the angular app
FROM nginx:1.23-alpine
COPY --from=build /frontend/dist/elite-site/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
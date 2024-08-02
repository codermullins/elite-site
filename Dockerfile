FROM node:alpine3.18
WORKDIR /app
COPY . ./
WORKDIR /backend
COPY ./backend/ ./
RUN ls
RUN npm install
WORKDIR /frontend
COPY ./frontend/ ./ 
RUN ls
RUN npm install
RUN npm run build
WORKDIR /backend
EXPOSE 4000 4200
CMD npm run start
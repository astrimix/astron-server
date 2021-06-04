FROM node:16-slim

WORKDIR /opt/app

COPY ./package.json .

RUN npm install && npm install -g nodemon

EXPOSE 3000

CMD [ "nodemon", "main.js" ]
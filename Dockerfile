FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . . 

EXPOSE 8000

CMD [ "node", "server.js" ]
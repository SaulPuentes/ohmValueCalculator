FROM node:19-alpine3.16

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8001

CMD ["npm", "start"]
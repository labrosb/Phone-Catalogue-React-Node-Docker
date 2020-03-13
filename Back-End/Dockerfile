FROM node:alpine

ADD . /phone-catalogue/server
WORKDIR /phone-catalogue/server

COPY package.json /phone-catalogue/server

RUN npm install

COPY . .

CMD ["npm","start"]

EXPOSE 8080

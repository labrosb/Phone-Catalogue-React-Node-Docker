FROM node:alpine

ADD . /phone-catalogue/client
WORKDIR /phone-catalogue/client

COPY package.json /phone-catalogue/client

RUN apk add python \
			make \
			g++ \
		&& npm install

CMD ["npm","start"]

EXPOSE 3000

FROM alpine:latest
RUN apk update \ 
    && apk add nodejs-npm \
    && mkdir /webapp

COPY ./server.js /webapp
COPY ./package.json /webapp
COPY ./modules/ /webapp/modules
WORKDIR /webapp
RUN npm install
CMD ["node", "server.js"]
EXPOSE 8080
FROM alpine:3.20

RUN apk add --no-cache \
	bash \
	nano \
	git \
	yarn

COPY ./build.sh /home/build.sh

WORKDIR /home/www
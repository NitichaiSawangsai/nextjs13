FROM node:16.20-alpine AS production

WORKDIR /usr/src/app

COPY . ./

RUN yarn

EXPOSE 3000

ARG VERSION
ENV HOST=0.0.0.0
ENV PORT=3000

RUN yarn build

CMD [ "yarn", "start" ]

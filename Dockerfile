FROM node:alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3333

CMD ["yarn", "start"]
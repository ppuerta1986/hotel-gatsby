FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN yarn

RUN gatsby clean

RUN gatsby build

COPY --from=build /app/public .
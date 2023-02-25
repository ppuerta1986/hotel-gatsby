FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

COPY --from=build /app/public
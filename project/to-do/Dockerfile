FROM node:current-alpine AS base

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

FROM base AS build
COPY /src ./src
COPY package.json yarn.lock tsconfig*.json nest-cli.json ./
ENV NODE_ENV=${NODE_ENV}
RUN yarn --frozen-lockfile
RUN yarn build

FROM base AS test
ENV NODE_ENV=test
COPY --from=build /usr/src/app/package.json package.json
COPY --from=build /usr/src/app/node_modules node_modules
COPY .eslintrc.js .prettierrc ./
COPY /src ./src
RUN yarn test
RUN yarn lint

FROM base AS release
ENV NODE_ENV=${NODE_ENV}
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules node_modules
ENTRYPOINT ["node", "./dist/main.js"]
EXPOSE 3000
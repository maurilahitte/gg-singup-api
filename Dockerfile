#DEPS
FROM node:16.15-alpine3.15 AS deps

EXPOSE 3300
LABEL maintainerTeam="api-gogrow"
WORKDIR /app

COPY --chown=node:node ./package*.json /app/

ARG NPM_READ_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=${NPM_READ_TOKEN}" > /app/.npmrc
RUN npm ci --no-audit && npm cache clean --force

#TEST
COPY --chown=node:node ./src ./src
COPY --chown=node:node ./tsconfig.json ./
COPY --chown=node:node ./.mocharc.json ./

RUN npm run test:ci

#BUILD
FROM node:14.4-alpine3.11 as production
WORKDIR /app


COPY --chown=node:node --from=deps /app/src ./src
COPY --chown=node:node --from=deps /app/package.json ./
COPY --chown=node:node --from=deps /app/package-lock.json ./
COPY --chown=node:node --from=deps /app/node_modules ./node_modules
COPY --chown=node:node --from=deps /app/tsconfig.json ./
COPY --chown=node:node --from=deps /app/.npmrc ./

RUN npm run build

#CLEANUP
RUN npm prune --production
RUN rm -rf /app/.npmrc
USER node

CMD ["node", "./dist/src/index"]

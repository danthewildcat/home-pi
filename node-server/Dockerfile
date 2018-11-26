FROM node:10.13.0 as base
  RUN true \
    && apt-get update \
    && groupadd -r app \
    && useradd \
      --system \
      --gid app \
      --no-create-home \
      --home-dir /srv \
      app \
    && mkdir -p /srv/app \
    && chown --recursive app:app /srv \
    ;
  WORKDIR /srv/app
  USER app
  EXPOSE 5000
  ENV SERVER_PORT 5000
  ENTRYPOINT ["/usr/local/bin/yarn", "run"]
  CMD ["start-dev"]

FROM base AS deps_prod
  ARG NPM_TOKEN
  RUN set -eu \
    && echo "umask=0077" >> ~/.npmrc \
    && chmod 0600 ~/.npmrc \
    ;
  COPY --chown=app:app .npmrc .yarnignore .yarnrc package.json yarn.lock /srv/app/
  RUN yarn install --only=production

FROM deps_prod AS deps_dev
  ENV NODE_ENV=development
  RUN yarn install

FROM base AS dev
  USER root
  RUN apt-get install -y \
    'libelf-dev=0.159*' \
    ;
  USER app
  ENV NODE_ENV=development

  # Copy (dev) node_modules, package.json, etc.
  COPY --chown=app:app --from=deps_dev /srv/app /srv/app

FROM dev AS compiled
  # Copy all source files, .babelrc, etc up.
  COPY --chown=app:app . /srv/app

  # Create the generated sources and then compile them with babel
  RUN yarn build

  # Create a package filtered by .yarnignore, unpacking it in /srv/package
  # This contains only the files needed to run (except for node_modules).
  RUN yarn pack --silent -f /dev/stdout | tar -xz --directory=/srv -f -

FROM base AS prod
  ENV NODE_ENV=production

  # Copy (prod) node_modules etc.
  # But not /srv/.npmrc
  RUN yarn cache clean && rm -rf ~/.npm
  COPY --chown=app:app --from=deps_prod /srv/app/node_modules /srv/app/node_modules
  COPY --chown=app:app --from=compiled /srv/package /srv/app
  CMD ["start"]

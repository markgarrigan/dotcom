# Render the pages and stylesheet, then serve the static site with nginx.
FROM oven/bun:1.4-alpine AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY src ./src
COPY site ./site
# The pages link to the resumé, so refuse to build without it.
RUN test -f site/markgarrigan.pdf || { echo "site/markgarrigan.pdf is missing" >&2; exit 1; }
RUN bun run build

FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/site /usr/share/nginx/html
EXPOSE 80

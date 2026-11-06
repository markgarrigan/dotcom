# Render the pages and stylesheet, then serve the static site with nginx.
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY site ./site
# The pages link to the résumé, so refuse to build without it.
RUN test -f site/markgarrigan.pdf || { echo "site/markgarrigan.pdf is missing" >&2; exit 1; }
RUN npm run build

FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/site /usr/share/nginx/html
EXPOSE 80

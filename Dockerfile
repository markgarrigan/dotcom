# Render the pages and stylesheet, then serve the static site with nginx.
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY site ./site
RUN npm run build
# (the release workflow refuses to publish without site/markgarrigan.pdf)

FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/site /usr/share/nginx/html
EXPOSE 80

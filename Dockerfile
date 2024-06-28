FROM node:latest AS build
WORKDIR /portfolio

ADD . .
RUN npm install --force && npm run build -- --base=/containers/brdacostac-portfolio/

FROM nginx:latest AS server

COPY --from=build /portfolio/dist /usr/share/nginx/html

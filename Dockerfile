FROM node:latest AS build
WORKDIR /portfolio

ADD . .
RUN npm install --force && npm run build -- --base=/containers/brunoda_costa_cunha-portfolio/

FROM nginx:latest AS server

COPY --from=build /portfolio/dist /usr/share/nginx/html

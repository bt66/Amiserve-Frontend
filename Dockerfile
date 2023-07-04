# build environment
FROM mcr.microsoft.com/devcontainers/javascript-node:0-18 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
# RUN npm ci --silent
RUN npm i @emotion/react @emotion/styled
RUN npm install --legacy-peer-deps
COPY . ./

RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

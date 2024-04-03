FROM node:18-alpine

WORKDIR /usr/src/front

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run","dev" ]
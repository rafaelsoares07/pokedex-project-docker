FROM node:latest 

WORKDIR /usr/src/back

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

CMD ["npm","run","dev"]

EXPOSE 3000

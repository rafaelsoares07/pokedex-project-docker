FROM node:latest 

WORKDIR /usr/src/back

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 5000

RUN npx prisma generate

CMD ["npm", "start"]

EXPOSE 3000

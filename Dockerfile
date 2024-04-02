FROM node:latest 

WORKDIR /api

COPY . .

RUN rm -rf node_modules

RUN npm install && prisma migrate dev 

CMD ["sh", "-c", "prisma migrate dev && npm run start"]

EXPOSE 3000

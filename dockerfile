FROM node:22.7-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 80
CMD ["npm", "start"]

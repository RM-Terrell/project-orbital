FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN npm install --production && \
    npm install react-scripts@3.4.1 -g && \
    npm install serv

COPY . ./

RUN npm run build

CMD ["serve", "-s", "build", "-l", "3000"]

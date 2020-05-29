
FROM node

WORKDIR /app/frontend
COPY package.json /app/frontend
COPY package-lock.json /app/frontend

RUN npm install

COPY . /app/frontend/

EXPOSE 3000
CMD ["npm", "start"]

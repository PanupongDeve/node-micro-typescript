FROM node:10.16.0-jessie
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN cat package.json
RUN npm install -g yarn
RUN yarn install
RUN ./bash/yarn/build.sh

EXPOSE 3000
CMD ["yarn", "serve"]
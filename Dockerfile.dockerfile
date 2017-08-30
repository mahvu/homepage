FROM node:6
RUN mkdir -p /home/mafu/koodi/docker/homepage
WORKDIR /var/www/html/homepage
COPY package.json /var/www/html/homepage
RUN npm install
COPY . /home/mafu/koodi/docker/homepage
EXPOSE 8080
CMD ["npm", "start"]

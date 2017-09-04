FROM node:6
RUN git clone https://github.com/mahvu/homepage
WORKDIR /homepage
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]


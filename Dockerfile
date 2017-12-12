FROM node:6

# Create app directory
#RUN mkdir -p /home/Service
#WORKDIR /home/Service

# Bundle app source
#COPY . /home/Service

# install cnpm
#RUN npm config set registry https://registry.npm.taobao.org
#RUN npm --registry=https://registry.npm.taobao.org install -g cnpm

#npm install 
#RUN cnpm install

#EXPOSE 2018
#CMD [ "npm","run","dev" ]


# install npm
RUN npm config set registry https://registry.npm.taobao.org
RUN npm --registry=https://registry.npm.taobao.org install -g cnpm
RUN cnpm i -g npm

RUN mkdir -p /home/Service
VOLUME /home/Service
WORKDIR /home/Service
COPY . /home/Service

COPY ./start.sh /
RUN chmod +x /start.sh

CMD /start.sh

EXPOSE 2018
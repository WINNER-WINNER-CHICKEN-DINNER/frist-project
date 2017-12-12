FROM node:6

# install npm
 RUN npm config set registry https://registry.npm.taobao.org
 RUN npm --registry=https://registry.npm.taobao.org install -g cnpm
 RUN cnpm i -g npm
CMD echo 'hello my image from Dockerfile.'
EXPOSE 2018

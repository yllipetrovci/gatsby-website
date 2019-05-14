FROM        ubuntu:16.04
LABEL       Name=website/www-public Version=1.0.0

RUN         apt-get update
RUN         apt-get install curl -y
RUN         curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN         apt-get install -y nodejs 
RUN         apt-get install libpng-dev -y
RUN         apt-get install -y build-essential

RUN         npm install npm -g
RUN         npm install gatsby-cli -g
RUN         npm install -g firebase-tools

RUN         mkdir -p /root/dev/website/node_modules

#COPY        package.json /root/dev/website

WORKDIR     /root/dev/website

#RUN         ["npm", "install"]

EXPOSE      8000

#ENTRYPOINT  ["gatsby", "develop", "--host", "0.0.0.0"]
ENTRYPOINT  ["sleep", "2d"]
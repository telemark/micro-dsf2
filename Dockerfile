# Setting the base to nodejs 8
FROM mhart/alpine-node:8@sha256:72344934ed265582ba93d2ca7df98665d6deba1418c4d717d625c6337ea026fb

# Maintainer
MAINTAINER Jonas Enge

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start


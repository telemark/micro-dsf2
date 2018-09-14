# Setting the base to nodejs 8
FROM mhart/alpine-node:8@sha256:5475447a963eef25b981caa50183682bcc05813038ed5d113f5ac3bfc51ff0f7

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


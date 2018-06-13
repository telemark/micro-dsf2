# Setting the base to nodejs 8
FROM mhart/alpine-node:8@sha256:6991164f63061cc4c3dea361982e64d7dc2d0057f36b123e78262c7729c5c4ec

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


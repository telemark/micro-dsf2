# Setting the base to nodejs 8
FROM mhart/alpine-node:8@sha256:1c5c109543baf06e246542183d34151882e4250e65d686fbeec0ec1159230524

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


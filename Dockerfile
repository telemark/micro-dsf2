# Setting the base to nodejs 8
FROM mhart/alpine-node:8@sha256:3b4f810f7184aacea35894aa436e3c47b40df3ff75fca142f4fbf776eacf57bf

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


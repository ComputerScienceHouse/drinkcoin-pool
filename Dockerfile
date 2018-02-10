FROM node:0.10
MAINTAINER Steven Mirabito <smirabito@csh.rit.edu>

RUN apt-get update && \
    apt-get install -y libboost-all-dev && \
    apt-get clean

ADD package.json /opt/drinkcoin-pool/
WORKDIR /opt/drinkcoin-pool

RUN npm install && \
    adduser --system --group --no-create-home drinkcoin && \
    mkdir logs && \
    chmod og+rwx logs

ADD . /opt/drinkcoin-pool/

USER drinkcoin

CMD ["npm", "run", "start"]

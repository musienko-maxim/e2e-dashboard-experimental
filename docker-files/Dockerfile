FROM quay.io/mmusiien/puppeteer-chrome-linux-base:latest
COPY ../test-e2e /home/pptruser/test-e2e
COPY jest.config.js /home/pptruser
COPY package.json /home/pptruser
COPY TestConstants.ts /home/pptruser
COPY tsconfig.json /home/pptruser
COPY TestConstants.ts /home/pptruser
WORKDIR /home/pptruser/test-e2e
RUN yarn
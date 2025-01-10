FROM node:18.3.0-alpine3.15

WORKDIR /app

CMD [ "echo", "The current date and time is $(date)." ]

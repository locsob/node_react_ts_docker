FROM library/node:14.15-alpine

RUN apk add shadow

RUN /usr/sbin/groupadd -g 728760833 client_group
RUN /usr/sbin/useradd -s /bin/sh -g 728760833 -u 728770601 client_user
USER server_user:server_group
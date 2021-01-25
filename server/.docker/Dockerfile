FROM library/node:14.15-alpine

RUN apk add shadow

RUN /usr/sbin/groupadd -g 728760833 server_group
RUN /usr/sbin/useradd -s /bin/sh -g 728760833 -u 728770601 server_user
USER server_user:server_group
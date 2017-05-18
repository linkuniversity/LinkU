#!/bin/bash
ssh -p 23579 linku@dev.linkuniversity.me -i ~/.ssh/id_linku-dev -o StrictHostKeyChecking=no <<'ENDSSH'
./set_up_server.sh
exit
ENDSSH

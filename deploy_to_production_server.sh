#!/bin/bash
ssh -p 23579 linku@linkuniversity.me -i ~/.ssh/id_linku -o StrictHostKeyChecking=no <<'ENDSSH'
./set_up_server.sh
exit
ENDSSH

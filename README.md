# LinkU (Link University and You)
## Table of Contents


* Environment
  * Environment Variables

## Environment Variables
### LinkU

name |  value | description
-----|---------|------------
`LINKU_DEV_SSH_PORT` | | linku development server ssh port
`LINKU_PRODUCTION_SSH_PORT` | | linku production server ssh port
`SENTRY_SECRET` | | linku server sentry secret key(with sentry project number)
`SENTRY_KEY` |  | linku server sentry key
`LINKU_MYSQL_PASSWORD` |  | linku MySQL password
`LINKU_SERVER_ENVIRONMENT` | local | linku local(for developer) personal computer
 　| development | linku development server
 　| production | linku production server
 　| ci | circle ci
`REACT_APP_LINKU_SERVER_ENVIRONMENT` | local | local environment used in linku_frontend
　 | production | production environment used in linku_frontend

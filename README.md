# GeoLocator Application with Email Functionality and Database Integration.

## Run

```bash
cd code
cd assessment-task-nodejs
npm i
npm run build
npm run start
```

```bash
cd code
cd assessment-task-react
npm i
npm run build
npm run start
```

## Mailing

I used node mailer with Outlook to send emails containing the information of the GeoLocation with the following credentials:

```bash
MAILER_EMAIL="ismaeiltestitplus24@outlook.com"
MAILER_PASSWORD="12345678@Ismail"
```

## GeoLocation

I used `OpenCage geocoding API` to fetch the reverse information of the entered `GeoLocation`

## DataBase

SqLite + TypeORM
![erd](/docs/erd/erd.png)

## FrameWorks

### Backend:

NodeJS / ExpressJs

### Frontend:

ReactJS

## Deployment:

I deployed the application over
`render` platform.

frontend link: https://assessment-task-front.onrender.com/
backend link: https://assessment-task.onrender.com/

## Env Variable

PORT=

OPENCAGE_API_KEY=

MAILER_EMAIL=

MAILER_PASSWORD=

## Dev Team

Ismail Alrifai

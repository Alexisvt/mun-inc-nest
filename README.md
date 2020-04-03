# README FIRST

## WITHOUT DOCKER

## Installation

```bash
$ npm install
```

Then create an `.env.development` file with the **MongoDB URL**, like this:

```env
MONGO_CONNECTION="mongodb://localhost:27017/mun"
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## WITH DOCKER

## Running the app

First create an `.env.production` file with the **MongoDB URL**, like this:

```env
MONGO_CONNECTION="mongodb://mongo:27017/mun"
```

Then use `docker-compose` command like this:

```bash
$ docker-compose up -d
```

## License

[MIT licensed](LICENSE).

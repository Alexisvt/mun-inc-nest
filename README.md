# README FIRST

## WITHOUT DOCKER

## Installation

```bash
$ npm install
```

Then create an `.env` file with the **MongoDB URL**, like this:

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

Just run the next `docker-compose` command:

```bash
$ docker-compose up -d
```

## License

[MIT licensed](LICENSE).

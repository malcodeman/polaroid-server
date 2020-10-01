# Polaroid server

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Known Vulnerabilities](https://snyk.io/test/github/malcodeman/polaroid-server/badge.svg)](https://snyk.io/test/github/malcodeman/polaroid-server)
[![GitHub contributors](https://img.shields.io/github/contributors/malcodeman/polaroid-server.svg)](https://github.com/malcodeman/polaroid-server)
[![GitHub Issues](https://img.shields.io/github/issues/malcodeman/polaroid-server.svg)](https://github.com/malcodeman/polaroid-server/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/polaroid-server/blob/master/LICENSE)

Polaroid server is simple RESTful API that enable users to create and share content or to participate in social networking.

## Usage

.env file should look like this:

```
DB_URL = postgres://postgres:toor@localhost/polaroid
```

To start the service run:

```
yarn install
yarn start
```

Client is located [here](https://github.com/malcodeman/polaroid-client).

## License

[MIT](./LICENSE)

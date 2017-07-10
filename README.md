# Chobi ver. 2

> Supercharged Photo Album

## Team

  - __Product Owner__: Ciaran Conners
  - __Scrum Master__: Patrick Tang
  - __Development Team Members__: James Quillin, Sheena Ramirez

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- Node 3.x
- Mongod 3.2.13
- Webpack
- Bower


## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm run bundle
```

### Start nodemon

```sh
npm run start-dev
```

## Contributing

> - Sign up for a Cloudinary API key
> - Create a mongoose URI
> - Create a config-env.js file in server/lib/ and enter credentials, e.g.:

```sh
exports.cloudinary = {
  NAME: '',
  API_KEY: '',
  API_SECRET: '',
};

exports.mongooseUri = 'mongodb://localhost/example';
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

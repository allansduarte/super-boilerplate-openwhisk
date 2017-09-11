# Super Boilerplate Openwhisk Serverless
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

A serverless Openwhisk boilerplate for starting new projects. This boilerplate follow the practices for typescript development.

## Get started

```
# Clone the repo --depth 1 removes all but one .git commit history
$ git clone --depth 1 https://github.com/allansduarte/super-boilerplate-openwhisk.git

# Change directory
$ cd super-boilerplate-openwhisk
```

### Prerequisites

Install Serverless Framework, Openwhisk Serverless plugin and Yarn globally

```
$ npm install --global serverless serverless-openwhisk
```

[Install Yarn](https://yarnpkg.com/pt-BR/docs/install/)

### Installing

Install project dependencies
```
$ npm install
```

Link serverless-openwhisk with your project
```
$ npm link serverless-openwhisk
```

Enable Yarn
```
$ yarn
```

Invoke a function locally and everything is ok.
```
$ serverless invoke local --function hello
{
    "body": 2,
    "statusCode": 200
}
```

### NPM scripts commands
| Task              | Description                                            |
|-------------------|--------------------------------------------------------|
| `build`           | Full production build. Webpack compile.                |
| `release`         | Generate changelog based on commits                    |
| `push`            | Shortcut for git push origin master --follow-tags      |
| `lint`            | Lint with tslint                                       |
| `outdated`        | Search npm packages for outdated dependencies          |

## Running the tests

Only coding style tests still

### Coding style tests

Linting.

```
$ yarn lint
```

## Deploy

Before all deploy the code is built automatically and distributed in the dist folder

```
$ yarn deploy
```

## Built With

* [Serverless](https://serverless.com/) - Serverless is your toolkit for deploying and operating serverless architectures. Focus on your application, not your infrastructure.
* [Openwhisk](https://openwhisk.incubator.apache.org/) - Apache OpenWhisk is a serverless, open source cloud platform that executes functions in response to events at any scale.
* [Typescript](https://www.typescriptlang.org/) - Typescript is a typed superset of Javascript that compiles to plain Javasscript. Any browser. Any host. Any OS. Open source.
* [Webpack](https://webpack.github.io/) - A super modular code packer.

## Versioning

Using [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/allansduarte/super-boilerplate-openwhisk/tags).

## Authors

* **Allan Duarte** - *Initial work* - [Allan Duarte](https://github.com/allansduarte)

See also the list of [contributors](https://github.com/allansduarte/super-boilerplate-openwhisk/contributors).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration from [Ionic Boilerplate](https://github.com/marcoturi/ionic-boilerplate).
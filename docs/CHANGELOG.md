# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0]

### Added

-   eslint + prettier + husky + lint-staged config
-   Formats all existing .js, .md and .json files
-   Adds jest support and hooks test acceptance before push

## [0.3.1]

### Fixed

-   Container reference on index after dockerization

## [0.3.0]

### Added

-   Containerized execution

### Changed

-   Better logger (even colored!)

## [0.2.0]

### Added

-   ScopePerRequest middleware

### Changed

-   In order to use scoped-per-request registered modules, controllers must access scoped components through `ctx.state.container.resolve('moduleName')` instead of receiving them from module injection. That's how it was built to work.

## [0.1.0]

### Added

-   Project initial folders
-   Initial web server using IoC with `awilix`

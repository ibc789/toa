# Change Log

All notable changes to this project will be documented in this file starting from version **v0.10.0**.
This project adheres to [Semantic Versioning](http://semver.org/).

## [1.8.11] - 2016-09-01

### change

- Add `request.origin`, `context.origin`.

### fixed

- Fix documents.

## [1.8.10] - 2016-08-31

### change

- Remove unnecessary error processing logic

### fixed

- Destroy the previous body stream after response finished.

## [1.8.9] - 2016-08-31

### change

- Use lower case header. #4

## [1.8.8] - 2016-08-27

### change

- Updated dependencies.
- clear up code.

## [1.8.7] - 2016-08-20

### change

- Updated dependencies.
- clear up code.

## [1.8.6] - 2016-08-17

### change

- Improve Context prototype.

## [1.8.5] - 2016-08-17

### change

- Improve code.

## [1.8.4] - 2016-08-16

### change

- Improve error message.
- Change `describe` to `suite` in tests

## [1.8.3] - 2016-08-05

### change

- `ctx.throw` used `ctx.createError`.

## [1.8.2] - 2016-08-01

### change

- Improve code.
- Fixed ctx.end().

## [1.8.1] - 2016-07-30

### change

- Improve code.
- Update readme.

## [1.8.0] - 2016-07-30

### change

- Support more middleware function Style.
- Add `async/await` example.

## [1.7.2] - 2016-07-27

### change

- Improve code.

## [1.7.1] - 2016-07-21

### fixed

- When context emit "end" event, context.headerSent should be true (about stream body).

## [1.7.0] - 2016-07-21

### change

- Improve code, classify context, request and response.
- Change context "finished" event to "finishe" event and "close" event.

## [1.6.5] - 2016-07-21

### change

- Improve code.

## [1.6.4] - 2016-07-19

### fixed

- Fixed respond function and "finished" event.

## [1.6.3] - 2016-07-19

### fixed

- Fixed stream body.

## [1.6.2] - 2016-07-19

### fixed

- Fixed error'context.

## [1.6.1] - 2016-07-18

### fixed

- Fixed error respond.

## [1.6.0] - 2016-07-18

### change

- Improve performance, add bench.

## [1.5.2] - 2016-07-16

### fixed

- Fixed stream body [#3]

## [1.5.1] - 2016-06-15

### change

- Updated dependencies.

## [1.5.0] - 2016-05-22

### change

- Updated dependencies.
- Improve error response headers.

## [1.4.3] - 2016-05-15

### change

- Updated dependencies.

## [1.4.2] - 2016-04-03

### change

- Updated dependencies, use T-man to test.

## [1.4.1] - 2016-03-13

### change

- Updated dependencies.

## [1.4.0] - 2016-02-06

### change

- Updated dependencies, improve code and file structure.

## [1.3.2] - 2016-01-15

### change

- Updated dependencies, improve code.

## [1.3.1] - 2016-01-02

### fixed

- fixed stream body

## [1.3.0] - 2015-12-25
### change

- Change `end` event, it is emited in `respond()` now.
- Add `finished` event, which will be emited after a HTTP request closes, finishes, or errors.
- Remove mainFn's argument `thunk`, it is instead by `ctx.thunk`.

## [1.2.1] - 2015-12-20
### change

- retain CORS headers when throw error
- update dependencies

## [1.2.0] - 2015-11-28
### change

- do not send a content-type when the type is unknown (koa_#536)
- improve code

### fixed

- fixed stream body response
- ensure parseurl always working as expected

## [1.1.2] - 2015-11-24
### fixed

- fixed stream response.

## [1.1.0] - 2015-11-14
### Changed

- Improve code
- Update dependencies, [thunks](https://github.com/thunks/thunks) updated to v4.x with a break changed

## [1.0.1] - 2015-10-11
### Changed

- Improve test
- Update dependencies

## [1.0.0] - 2015-08-23
### Changed

- Remove `context.onerror` method
- Update dependencies
- Update documents

### Fixed

## [0.13.0] - 2015-08-04
### Changed

- `onstop` handler will execute `context.onPreEnd` queue
- Add `context.createError`

### Fixed

## [0.12.3] - 2015-07-16
### Changed

### Fixed

- Fixed context.toJSON

## [0.12.2] - 2015-06-28
### Changed

- Updated dependencies
- Don't unset headers while context throw non-error object.

### Fixed

## [0.12.1] - 2015-06-15
### Changed

### Fixed

- Fixed `context.end` with `thunks@v3.4.2`

## [0.12.0] - 2015-06-14
### Changed

- Support `onstop` options for Toa constructor, add `context.end()` to stop request process.
- Add `app.toListener()`
- Toa constructor will not create server by default, server will be created in `app.listen()` if omit in constructor.
- Improve test and documents

### Fixed

## [0.11.1] - 2015-06-01
### Changed

- coverage test

### Fixed

---
## [0.11.0] - 2015-06-01
### Changed

- change to [JavaScript Standard Style](https://github.com/feross/standard)

### Fixed

---
## [0.10.0] - 2015-05-24
### Changed

- mount `thunk` function to context.
- remove `app.onmessage`, it become to a module `toa-pm`.
- update with `koa` v0.21.0.

### Fixed

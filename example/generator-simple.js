'use strict'
// **Github:** https://github.com/toajs/toa
//
// **License:** MIT

var Toa = require('..')
var app = Toa(function * () {
  this.body = yield 'Hello World!\n-- ' + this.config.poweredBy
})

app.config = {
  poweredBy: 'Test'
}

app.listen(3000)

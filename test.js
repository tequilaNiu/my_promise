const Promise = require('./promise');

new Promise(function (resolve, reject) {
  setTimeout(function () {
    var a = 100;
    resolve(a);
  }, 1000);
}).then(function (res) {
  console.log(res);

  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      var b = 200;
      resolve(b);
    }, 1000);
  })
}).then(function (res) {
  console.log(res);
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      var c = 300;
      resolve(c);
    }, 1000);
  })
}).then(function (res) {
  console.log(res);
});


// import db config
var config = require('./config.json')

// export config node module
module.exports = {
  getDbConnectionString: function () {
    return 'mongodb://' + config.user + ':' + config.pass + '@ds159200.mlab.com:59200/node-todo'
  }
}

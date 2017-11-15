const constants = require ('../config/constants');

function isAuth(req, res, next) {
    next()
}

module.exports = {
    isAuth
}
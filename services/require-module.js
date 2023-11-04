'use strict'

class Modules {
    get bycrpt() {
        return require("bcrypt");
    }

    get jsonwebtoken() {
        return require('jsonwebtoken');
    }
}

module.exports = Modules
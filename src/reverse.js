'use strict';

module.exports = function reverse(string="hello world") {
    return string.split('').reverse().join('');
};

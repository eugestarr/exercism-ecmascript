"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function isLeapYear(year) {
    return !(year % 400) || year % 100 && !(year % 4);
}

exports["default"] = isLeapYear;
module.exports = exports["default"];
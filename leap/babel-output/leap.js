"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function isLeapYear(year) {
    if (!(year % 400)) return true;
    if (!(year % 100)) return false;
    if (!(year % 4)) return true;
}

exports["default"] = isLeapYear;
module.exports = exports["default"];
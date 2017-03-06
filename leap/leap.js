function isLeapYear(year){
    if (!(year % 400))
        return true;
    if (!(year % 100))
        return false;
    if (!(year % 4))
        return true;
}

export default isLeapYear;
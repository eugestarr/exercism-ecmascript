function isLeapYear(year){
    return (!(year % 400)) || ((year % 100) && (!(year % 4)));
}

export default isLeapYear;
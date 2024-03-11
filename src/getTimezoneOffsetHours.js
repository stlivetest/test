function getTimezoneOffsetHours(params) {
    const date = new Date();
    return date.getTimezoneOffset / 60;

}
module.exports = getTimezoneOffsetHours;
A1

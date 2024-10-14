module.exports = function reverse(n) {
    const stroke = n.toString().split("").reverse().join("");
    return parseInt(stroke);
};

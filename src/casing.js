module.exports = function(str, casing) {
    if (!casing || casing === 'N/A') return str;
    if (casing === 'upper') {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    };
};
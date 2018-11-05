module.exports = function(str, casing) {
    if (casing === 'upper') {
        return str.toUpperCase();
    } else if (casing === 'lower') {
        return str.toLowerCase();
    } else if (casing === 'alternate') {
        let splitString = str.split('');
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            if (!(i%2)) newStr += splitString[i].toUpperCase();
            else newStr += splitString[i].toLowerCase();
        };
        return newStr;
    } else {
        return str;
    };
};
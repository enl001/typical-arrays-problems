exports.min = array => checkIfValid(array) ? Math.min(...array) : 0;

exports.max = array => checkIfValid(array) ? Math.max(...array) : 0;

exports.avg = array => checkIfValid(array) ? array.reduce((a, b) => a + b, 0) / array.length : 0;

const checkIfValid = arr => (arr != null && arr.hasElements());

Array.prototype.hasElements = function(){
    return this.length != 0;
}


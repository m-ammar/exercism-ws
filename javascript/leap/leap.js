//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (yearVal) {
    this.yearVal = yearVal;
};

Year.prototype.isLeap = function () {

    if (this.yearVal%4 === 0) {
        if (this.yearVal%100 === 0) {
            if (this.yearVal%400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }

};

module.exports = Year;

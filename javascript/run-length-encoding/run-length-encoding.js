var RLE = {
    encode: function(str) {
        var rleStrVal = '';
        var count = 1;
        for(i = 0; i < str.length; i++) {
            if (str[i] == str[i + 1]) {
                count++;
            } else {
                    if (count > 1) {
                        rleStrVal = rleStrVal + count.toString();
                        count = 1;
                    }
                    rleStrVal = rleStrVal + str[i];
            }
        }
        return rleStrVal;
    },
    decode: function(str) {
        var rldStrVal = '';
        var count = '';
        for(i = 0; i < str.length; i++) {
            if(isNaN(parseInt(str[i], 10))) {
                switch (count) {
                    case '':
                        rldStrVal = rldStrVal + str[i];
                        break;
                    default:
                        rldStrVal = rldStrVal + str[i].repeat(count);
                        count = '';
                }
            }
            else {
                count = count + str[i];
            }
        }
        return rldStrVal;
    }
};

module.exports = RLE;
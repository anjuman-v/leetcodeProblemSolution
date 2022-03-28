/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   var map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  var len = s.length;
  var i = 0;
  var res = 0;
  while (i < len) {
    if (map[s.substr(i, 2)]) {
      res += map[s.substr(i, 2)];
      i += 2;
    } else {
      res += map[s[i]];
      i += 1;
    }
  }
  return res;

};
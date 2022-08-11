const ftoc = function(temps) {
  
  f = ((temps - 32) *(5/9) );
  n =Math.round(f * 10)/ 10;
  return n;
};

const ctof = function(temp) {
  c= (temp * (9/5) + 32);
  n = Math.round(c * 10)/ 10;
  return n;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

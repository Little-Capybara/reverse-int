module.exports = function reverse (n) {
  let str = Math.abs(n) +'';
  let arr = str.split('').reverse().join('');
  return (+arr);
  
}

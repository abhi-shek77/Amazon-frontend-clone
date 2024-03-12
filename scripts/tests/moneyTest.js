import formatCurrency from "../utils.js/money.js";

console.log('test suite: formatCurrency');
console.log('convert cents into dollars');
if(formatCurrency(2026) === '20.26'){
  console.log('passed');
}else{
  console.log('failed');
};

console.log('works with 0');
if(formatCurrency(0) === '0.00'){
  console.log('passed');
}else{
  console.log('failed');
};

console.log('rounds up to the nearest cent'); 
if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed');
};
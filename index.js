//map//
var numbers = [1, 2, 3, 4];
var doubles = numbers.map(function(x) {
   return x * 2;
});

var numbers = [2, 4, 6];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
//finter//
const words = ['rana', 'camaleon', 'mosquito', 'hormiga', 'mosco', 'escarabajo'];

const result = words.filter(word => word.length > 6);

console.log(result);
let n_temp = ('148 3').split(' ');
let n = n_temp[0];
let k = parseInt(n_temp[1]);

function digitSum(n, k) {
  let numberStr = n.toString().split('').map(Number);
  let sum = numberStr.reduce((a ,b) =>(a + b),0);

  if(numberStr.length <= 1){
    numberStr = n.toString().repeat(k).split('').map(Number);
    // as the repeat of K can exceed the string lenght limit at the beginnig,
    // I add the K at the end of the recursion and manually hardcode the last calculation after the repeat.
    sum = numberStr.reduce((a ,b) =>(a + b),0);
    numberStr = sum.toString().split('').map(Number);
    sum = numberStr.reduce((a ,b) =>(a + b),0);
    return sum;
  }

  let result = digitSum(sum, k);

  return result;
}

let result = digitSum(n ,k);
console.log(result);

// first solution, passing 6 tests,the other 4 exeeding string lenth on repeat.
// function digitSum(n, k) {
//   let numberStr = n.toString().repeat(k).split('').map(Number);
//   let sum = numberStr.reduce((a ,b) =>(a + b),0);
//   if(numberStr.length <= 1){
//     return sum;
//   }
//   let result = digitSum(sum, k);
//   return result;
// }
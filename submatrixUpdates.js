const getGets = (arr) => {
  let index = 0;
  return () => {
    const toReturn = arr[index];
    index += 1;
    return toReturn;
  };
};
const test = [
  '4 4 2',
  '1 2 3 4',
  '5 6 7 8',
  '9 10 11 12',
  '13 14 15 16',
  '2 3 2 5',
  '3 2 2 -3'
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------

let firstLine = gets().split(' ').map(Number);

let N = firstLine[0];
let M = firstLine[1];
let K = firstLine[2];
let matrix = [];

for (let i = 0 ; i < N;  i+=1) {
    let row = gets().split(' ').map(Number);
    matrix.push(row)
}

for (let i = 0 ; i < K ; i +=1) {
    let operations = gets().split(' ').map(Number);
    let R = operations[0];
    let C = operations[1];
    let S = operations[2];
    let D = operations[3];

    for (let k = 0 ; k < S;  k+=1) {
        for (let j = 0 ; j < S;  j+=1) {
          matrix[R+k-1][C+j-1] += D;
        }
    }
}

matrix.forEach(function(line) {
  console.log(line.join(' '));
})


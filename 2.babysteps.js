var args = process.argv; // Gets all the args

var sum = args.splice(2, args.length)   // Only take the arguments passed
    .map(number => Number(number))      // convert each argument to number
    .reduce((a, b) => (a + b), 0);      // perform reduce to sum each other

console.log(sum);
let numbers: number[] = [42, 0, -1, 100, 9];
let largest: number = Math.max(...numbers);

// prints the largest number (100) from the above array in the console:
console.log({ largest });

// typescript does not change the way that JS works
console.log(new Date().getMonth());

let sumChan = 0;
let sumLe = 0;

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    sumChan += i;
  } else {
    sumLe += i;
  }
}
console.log("tong so chan = " + sumChan);
console.log("Tong so le = " + sumLe);

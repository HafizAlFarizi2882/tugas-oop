let deret = [];
let n = 1; // Nilai awal
let totalSuku = 10; // Jumlah angka yang dicetak

for (let i = 1; i <= totalSuku; i++) {
  deret.push(n);
  n *= 2; // Setiap langkah dikali 2
}

console.log(deret.join(" "));
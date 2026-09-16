let deret = [];
let n = 1; // Nilai awal sesuai soal
let totalSuku = 12; // Jumlah angka yang dicetak

for (let i = 1; i <= totalSuku; i++) {
  deret.push(n);

  // Langkah ganjil (1, 3, 5, ...): n + 4
  // Langkah genap (2, 4, 6, ...): n - 2
  if (i % 2 !== 0) {
    n += 4;
  } else {
    n -= 2;
  }
}

console.log(deret.join(" "));
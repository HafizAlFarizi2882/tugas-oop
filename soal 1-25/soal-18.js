let deret = [];
let n = 5; // Nilai awal sesuai soal
let totalSuku = 12; // Jumlah angka yang dicetak

for (let i = 1; i <= totalSuku; i++) {
  deret.push(n);

  // Langkah ganjil (1, 3, 5, ...): n - 3
  // Langkah genap (2, 4, 6, ...): n + 5
  if (i % 2 !== 0) {
    n -= 3;
  } else {
    n += 5;
  }
}

console.log(deret.join(" "));
let deret = [];
let n = 1; // Nilai awal sesuai soal
let totalSuku = 13; // Jumlah angka yang dicetak

for (let i = 1; i <= totalSuku; i++) {
  deret.push(n);

  // Pola berulang 3 langkah (i % 3):
  // i % 3 === 1 (Langkah 1, 4, 7...): n + 1
  // i % 3 === 2 (Langkah 2, 5, 8...): n + 2
  // i % 3 === 0 (Langkah 3, 6, 9...): n + 3
  if (i % 3 === 1) {
    n += 1;
  } else if (i % 3 === 2) {
    n += 2;
  } else {
    n += 3;
  }
}

console.log(deret.join(" "));
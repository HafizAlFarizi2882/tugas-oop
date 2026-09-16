let deret = [];
let n = 2; // Nilai awal sesuai soal
let totalSuku = 10; // Mencetak 10 angka pertama

for (let i = 1; i <= totalSuku; i++) {
  deret.push(n);

  // Jika urutan ganjil: tambahkan 10 (n + 10)
  // Jika urutan genap: kurangi 5 (n - 5)
  if (i % 2 !== 0) {
    n += 10;
  } else {
    n -= 5;
  }
}

console.log(deret.join(" "));
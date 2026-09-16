let masukan = [12, 45, 7, 89, 23, 56, 91, 34, 67, 10];

let hitungGanjil = 0; // Variabel penampung total bilangan ganjil

for (let i = 0; i < masukan.length; i++) {
  // Cek apakah angka ganjil (sisa bagi dengan 2 adalah 1 atau bukan 0)
  if (masukan[i] % 2 !== 0) {
    hitungGanjil = hitungGanjil + 1; // Tambah 1 jika ganjil
  } else {
    // Jika genap, abaikan
  }
}

console.log("Daftar Angka          :", masukan);
console.log("Jumlah Bilangan Ganjil:", hitungGanjil); // Output: 6
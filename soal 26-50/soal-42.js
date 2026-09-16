// Simulasi masukan 10 angka dalam array
let masukan = [12, 45, 7, 89, 23, 56, 91, 34, 67, 10];

let terbesar = masukan[0]; // Asumsikan angka pertama adalah yang terbesar

for (let i = 1; i < masukan.length; i++) {
  if (masukan[i] > terbesar) {
    terbesar = masukan[i]; // Perbarui jika ditemukan angka yang lebih besar
  }
}

console.log("Daftar Angka :", masukan.join(", "));
console.log("Angka Terbesar:", terbesar); // Output: 91
// Simulasi masukan 10 angka dalam array
let masukan = [12, 45, 7, 89, 23, 56, 91, 34, 67, 10];

let terkecil = masukan[0]; // Asumsikan angka pertama adalah yang terkecil

for (let i = 1; i < masukan.length; i++) {
  if (masukan[i] < terkecil) {
    terkecil = masukan[i]; // Perbarui jika ditemukan angka yang lebih kecil
  }
}

console.log("Daftar Angka :", masukan.join(", "));
console.log("Angka Terkecil:", terkecil); // Output: 7
let masukan = [12, 45, 7, 89, 23, 56, 91, 34, 67, 10];

let jumlahGenap = 0;
let daftarGenap = [];

for (let i = 0; i < masukan.length; i++) {
  if (masukan[i] % 2 === 0) {
    jumlahGenap++;
    daftarGenap.push(masukan[i]);
  }
}

console.log("Daftar Angka        :", masukan.join(", "));
console.log("Angka Genap          :", daftarGenap.join(", "));
console.log("Jumlah Angka Genap   :", jumlahGenap); // Output: 4
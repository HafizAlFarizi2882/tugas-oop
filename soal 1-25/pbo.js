// fungsi untuk membuat nomer jawaban
function nomor(jumlah) {
    const i = ''
    console.log(`No. ${jumlah}`);
}
// === soal 1 ===
nomor(1);
function balikKalimat(kalimat) {
  return kalimat.split('').reverse().join('');
}
const teks = "Hallo";
console.log(balikKalimat(teks)); // Output: ollaH
// .split(''): Memecah string menjadi array karakter.
// .reverse(): Membalikkan urutan elemen dalam array.
// .join(''): Menggabungkan kembali elemen array menjadi sebuah string.

// === soal 2 ===
nomor(2);
const teks2 = "Belajar JavaScript itu mudah dan menyenangkan";
const cari = "a";

// Membagi string berdasarkan huruf yang dicari, lalu menghitung panjang array minus 1
let jumlah = teks2.toLowerCase().split(cari.toLowerCase()).length - 1;

console.log(`Jumlah huruf '${cari}': ${jumlah}`);

// === soal 3 ===
nomor(3);
let kalimat = "sembako";
let arrayKarakter = kalimat.split('');
let jumlahKarakter = arrayKarakter.length;
console.log("Array karakter:", arrayKarakter); 
console.log("Jumlah karakter:", jumlahKarakter); 

// === soal 4 ===
nomor(4);
let hasil = "";
for (let i = 1; i <= 6; i++) {
  hasil += String(i).repeat(i);
}
console.log(hasil);

// === soal 5 ===
nomor(5);
let hasill = "";
for (let i = 6; i >= 1; i--) {
  hasill += String(i).repeat(i);
}
console.log(hasill);

// === soal 6 ===
nomor(6);
let hasil2 = "";

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    hasil2 += j;
  }
}

console.log(hasil2);
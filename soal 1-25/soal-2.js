const teks2 = "Belajar JavaScript itu mudah dan menyenangkan";
const cari = "a";

// Membagi string berdasarkan huruf yang dicari, lalu menghitung panjang array minus 1
let jumlah = teks2.toLowerCase().split(cari.toLowerCase()).length - 1;

console.log(`Jumlah huruf '${cari}': ${jumlah}`);

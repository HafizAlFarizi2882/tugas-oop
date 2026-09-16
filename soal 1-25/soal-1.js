function balikKalimat(kalimat) {
  return kalimat.split('').reverse().join('');
}
const teks = "Hallo";
console.log(balikKalimat(teks)); // Output: ollaH
// .split(''): Memecah string menjadi array karakter.
// .reverse(): Membalikkan urutan elemen dalam array.
// .join(''): Menggabungkan kembali elemen array menjadi sebuah string.

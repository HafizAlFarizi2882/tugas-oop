let hasil = "";

for (let i = 6; i >= 1; i--) {
  if (i % 2 === 0) {
    // Baris genap (6, 4, 2): cetak angka i sebanyak i kali
    hasil += String(i).repeat(i);
  } else {
    // Baris ganjil (5, 3, 1): cetak deret angka dari 1 sampai i
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
  }
}

console.log(hasil);
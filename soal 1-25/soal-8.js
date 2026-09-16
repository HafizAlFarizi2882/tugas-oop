let hasil = "";

for (let i = 1; i <= 6; i++) {
  if (i % 2 !== 0) {
    // Baris ganjil (1, 3, 5): cetak angka i sebanyak i kali
    hasil += String(i).repeat(i);
  } else {
    // Baris genap (2, 4, 6): cetak angka berurutan dari 1 sampai i
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
  }
}

console.log(hasil);
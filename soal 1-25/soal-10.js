let hasil = "";

for (let i = 6; i >= 1; i--) {
  if (i % 2 === 0) {
    // Baris genap (6, 4, 2): cetak deret hitung mundur dari i ke 1
    for (let j = i; j >= 1; j--) {
      hasil += j;
    }
  } else {
    // Baris ganjil (5, 3, 1): cetak angka i sebanyak i kali
    hasil += String(i).repeat(i);
  }
}

console.log(hasil);
let hasil = "";

for (let i = 1; i <= 9; i++) {
  // Pola deret urut (1..i) terjadi pada angka: 1, 3, 4, 7, 8
  if ([1, 3, 4, 7, 8].includes(i)) {
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
  } else {
    // Pola angka berulang terjadi pada angka: 2, 5, 6, 9
    hasil += String(i).repeat(i);
  }
}

console.log(hasil);
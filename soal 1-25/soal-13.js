let hasil = "";

for (let i = 1; i <= 9; i++) {
  // Angka 2, 5, dan 6 dicetak sebagai deret urut
  if ([2, 5, 6].includes(i)) {
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
  } else {
    // Angka lainnya dicetak berulang sebanyak i kali
    hasil += String(i).repeat(i);
  }
}

console.log(hasil);
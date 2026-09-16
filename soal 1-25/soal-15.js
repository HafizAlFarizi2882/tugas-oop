let hasil = "";

for (let i = 8; i >= 1; i--) {
  // Angka 8, 7, 4, 3, 2 dicetak sebagai deret hitung mundur dari i ke 1
  if ([8, 7, 4, 3, 2].includes(i)) {
    for (let j = i; j >= 1; j--) {
      hasil += j;
    }
  } else {
    // Angka 6, 5, dan 1 dicetak berulang (repeat)
    hasil += String(i).repeat(i);
  }
}

console.log(hasil);
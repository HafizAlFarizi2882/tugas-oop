let hasil = "";

for (let i = 8; i >= 1; i--) {
  // Angka 8, 7, 4, 3, dan 1 dicetak berulang (repeat)
  if ([8, 7, 4, 3, 1].includes(i)) {
    hasil += String(i).repeat(i);
  } else {
    // Angka 6, 5, dan 2 dicetak sebagai deret hitung mundur dari i ke 1
    for (let j = i; j >= 1; j--) {
      hasil += j;
    }
  }
}

console.log(hasil);
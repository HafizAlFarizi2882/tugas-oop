function faktorial(n) {
  if (n < 0) return "Faktorial tidak terdefinisi untuk angka negatif";
  if (n === 0) return "0! = 1";

  let proses = [];
  let hasil = 1;

  // Loop mundur dari n sampai 1
  for (let i = n; i >= 1; i--) {
    proses.push(i);
    hasil *= i;
  }

  // Gabungkan proses perkalian dengan tanda 'x'
  return `${n}! = ${proses.join(" x ")} = ${hasil}`;
}

// Contoh Pengujian
console.log(faktorial(3)); // Output: 3! = 3 x 2 x 1 = 6

// atau simple nya
function hitungFaktorial(n) {
  return n <= 1 ? 1 : n * hitungFaktorial(n - 1);
}

console.log(hitungFaktorial(3)); // Output: 6
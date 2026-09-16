function cetakFibonacci(maksimum) {
  let deret = [];
  let a = 0;
  let b = 1;

  // Masukkan nilai awal jika masih di bawah/sama dengan maksimum
  while (a <= maksimum) {
    deret.push(a);
    let selanjutnya = a + b; // Hitung angka berikutnya
    a = b;                   // Geser nilai b ke a
    b = selanjutnya;         // Geser nilai selanjutnya ke b
  }

  console.log(`Deret Fibonacci (Maksimum ${maksimum}):`);
  console.log(deret.join(", "));
}

// Contoh Penggunaan:
cetakFibonacci(35);
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
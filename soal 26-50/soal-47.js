function totalBilanganGenap(nAwal, nAkhir) {
  let total = 0;

  for (let i = nAwal; i <= nAkhir; i++) {
    // Memeriksa apakah bilangan genap (habis dibagi 2)
    if (i % 2 === 0) {
      total = total + i; // Tambahkan angka genap ke variabel total
    } else {
      // Abaikan jika ganjil
    }
  }

  console.log(`Total bilangan genap dari ${nAwal} hingga ${nAkhir} adalah: ${total}`);
}

// Contoh Pengujian
totalBilanganGenap(1, 10);
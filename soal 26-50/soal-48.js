function totalBilanganGanjil(nAwal, nAkhir) {
  let total = 0;

  for (let i = nAwal; i <= nAkhir; i++) {
    // Memeriksa apakah bilangan ganjil (sisa bagi 2 tidak sama dengan 0)
    if (i % 2 !== 0) {
      total = total + i; // Tambahkan angka ganjil ke variabel total
    } else {
      // Abaikan jika genap
    }
  }

  console.log(`Total bilangan ganjil dari ${nAwal} hingga ${nAkhir} adalah: ${total}`);
}

// Contoh Pengujian
totalBilanganGanjil(1, 10);
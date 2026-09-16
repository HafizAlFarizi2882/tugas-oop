function hitungTotalPositif(nAwal, nAkhir) {
  let total = 0;

  for (let i = nAwal; i <= nAkhir; i++) {
    // Memastikan hanya bilangan bulat positif (i > 0) yang ditambahkan
    if (i > 0) {
      total = total + i;
    } else {
      // Abaikan jika angka 0 atau negatif
    }
  }

  console.log(`Total bilangan positif dari ${nAwal} hingga ${nAkhir} adalah: ${total}`);
}

// Contoh Pengujian
hitungTotalPositif(1, 10);   // Rentang 1 sampai 10
hitungTotalPositif(-5, 5);   // Rentang campuran (-5 sampai 5)
function habisDibagiLima(nAwal, nAkhir) {
  let hasil = [];

  for (let i = nAwal; i <= nAkhir; i++) {
    // Sisa hasil bagi (%) dengan 6 harus sama dengan 0
    if (i % 6 === 0) {
      hasil.push(i);
    }
  }

  console.log(`Bilangan habis dibagi 6 (${nAwal} - ${nAkhir}):`);
  console.log(hasil.length > 0 ? hasil.join(", ") : "Tidak ditemukan");
}

// Contoh Pengujian (Rentang 1 sampai 60)
habisDibagiLima(1, 60);
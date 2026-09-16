function habisDibagiTiga(nAwal, nAkhir) {
  let hasil = [];

  for (let i = nAwal; i <= nAkhir; i++) {
    // Sisa hasil bagi (%) dengan 3 harus sama dengan 0
    if (i % 3 === 0) {
      hasil.push(i);
    }
  }

  console.log(`Bilangan habis dibagi 3 (${nAwal} - ${nAkhir}):`);
  console.log(hasil.length > 0 ? hasil.join(", ") : "Tidak ditemukan");
}

// Contoh Pengujian (Rentang 1 sampai 30)
habisDibagiTiga(1, 30);
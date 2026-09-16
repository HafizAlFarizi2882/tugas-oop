function habisDibagiEmpat(nAwal, nAkhir) {
  let hasil = [];

  for (let i = nAwal; i <= nAkhir; i++) {
    // Sisa hasil bagi (%) dengan 4 harus sama dengan 0
    if (i % 4 === 0) {
      hasil.push(i);
    }
  }

  console.log(`Bilangan habis dibagi 4 (${nAwal} - ${nAkhir}):`);
  console.log(hasil.length > 0 ? hasil.join(", ") : "Tidak ditemukan");
}

// Contoh Pengujian (Rentang 1 sampai 40)
habisDibagiEmpat(1, 40);
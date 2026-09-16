function tahunKabisatAkhiranEmpat(nAwal, nAkhir) {
  let hasil = [];

  for (let tahun = nAwal; tahun <= nAkhir; tahun++) {
    // Syarat 1: Angka terakhir adalah 4 (tahun % 10 === 4)
    // Syarat 2: Merupakan tahun kabisat ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0)
    let akhiranEmpat = tahun % 10 === 4;
    let isKabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);

    if (akhiranEmpat && isKabisat) {
      hasil.push(tahun);
    }
  }

  console.log(`Tahun Kabisat berakhiran 4 (${nAwal} - ${nAkhir}):`);
  console.log(hasil.length > 0 ? hasil.join(", ") : "Tidak ditemukan");
}

// Contoh Pengujian dari rentang tahun 1900 sampai 2026
tahunKabisatAkhiranEmpat(1900, 2026);
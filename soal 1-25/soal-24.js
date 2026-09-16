function tahunKabisatAkhiranNol(nAwal, nAkhir) {
  let hasil = [];

  for (let tahun = nAwal; tahun <= nAkhir; tahun++) {
    // Syarat 1: Angka terakhir adalah 0 (tahun % 10 === 0)
    // Syarat 2: Merupakan tahun kabisat ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0)
    let akhiranNol = tahun % 10 === 0;
    let isKabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);

    if (akhiranNol && isKabisat) {
      hasil.push(tahun);
    }
  }

  console.log(`Tahun Kabisat berakhiran 0 (${nAwal} - ${nAkhir}):`);
  console.log(hasil.length > 0 ? hasil.join(", ") : "Tidak ditemukan");
}

// Contoh Pengujian dari rentang tahun 1900 sampai 2024
tahunKabisatAkhiranNol(1900, 2024);
function cekPrima(angka) {
  // Bilangan kurang dari atau sama dengan 1 bukan bilangan prima
  if (angka <= 1) {
    return false;
  }

  // Cek pembagi dari 2 hingga akar dari angka tersebut
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      return false; // Jika ada pembagi lain, bukan prima
    }
  }

  return true; // Jika tidak ada pembagi, maka prima
}

function tampilkanPrima(nAwal, nAkhir) {
  let hasil = [];

  for (let i = nAwal; i <= nAkhir; i++) {
    if (cekPrima(i)) {
      hasil.push(i);
    }
  }

  console.log(`Bilangan prima dari ${nAwal} hingga ${nAkhir}:`);
  console.log(hasil.length > 0 ? hasil.join(", ") : "Tidak ditemukan");
}

// Contoh Pengujian (Rentang 1 sampai 30)
tampilkanPrima(1, 30);
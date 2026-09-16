function cekPrima(angka) {
  if (angka <= 1) {
    return false; // Bilangan <= 1 bukan prima
  }

  // Cek pembagi hingga akar dari angka
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      return false; // Ditemukan pembagi selain 1 dan dirinya sendiri
    }
  }

  return true;
}

function totalBilanganPrima(nAwal, nAkhir) {
  let total = 0;
  let daftarPrima = [];

  for (let i = nAwal; i <= nAkhir; i++) {
    if (cekPrima(i)) {
      total = total + i; // Akumulasi nilai prima ke variabel total
      daftarPrima.push(i);
    }
  }

  console.log(`Bilangan prima ditemukan: ${daftarPrima.join(", ")}`);
  console.log(`Total penjumlahan bilangan prima dari ${nAwal} hingga ${nAkhir} adalah: ${total}`);
}

// Contoh Pengujian (Rentang 1 sampai 10)
totalBilanganPrima(1, 10);
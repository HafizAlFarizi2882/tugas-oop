function buatPolaBintang(n) {
  // Baris pertama khusus (bintang penuh tanpa spasi)
  console.log("*".repeat(2 * n - 1));

  // Baris ke-2 hingga baris ke-n
  for (let i = n - 1; i >= 1; i--) {
    let bintang = "*".repeat(i);
    let spasi = " ".repeat(2 * (n - i) - 1);
    console.log(bintang + spasi + bintang);
  }
}

// Panggil fungsi dengan jumlah baris = 6
buatPolaBintang(6);
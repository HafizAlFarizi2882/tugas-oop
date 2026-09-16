/* ============================================================
   SOAL 57 - Pola 7
   *****
    ****
     ***
      **
       *
      **
     ***
    ****
   *****

   Logika:
   - Bentuk "V" bintang: jumlah bintang turun dari 5 ke 1 lalu naik lagi ke 5.
   - Rumus jumlah bintang = |4 - i| + 1, untuk i = 0..8 (9 baris)
   - Spasi dihitung supaya semua baris rata kanan.
============================================================ */
function soal57() {
  const total = 9;
  const puncak = 4; // titik tengah (i dengan bintang paling sedikit)

  for (let i = 0; i < total; i++) {
    const bintang = Math.abs(puncak - i) + 1;
    const spasi = 5 - bintang; // biar rata kanan
    console.log(" ".repeat(spasi) + "*".repeat(bintang));
  }
}

soal57();
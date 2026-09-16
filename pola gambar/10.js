/* ============================================================
   SOAL 60 - Pola 10
   ******
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
   - Bentuk "V" bintang seperti Soal 57, tapi puncak 6 bintang.
   - Rumus jumlah bintang = |5 - i| + 1, untuk i = 0..9 (10 baris)
============================================================ */
function soal60() {
  const total = 10;
  const puncak = 5;

  for (let i = 0; i < total; i++) {
    const bintang = Math.abs(puncak - i) + 1;
    const spasi = 6 - bintang;
    console.log(" ".repeat(spasi) + "*".repeat(bintang));
  }
}

soal60();
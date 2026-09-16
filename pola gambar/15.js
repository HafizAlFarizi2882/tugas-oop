/* ============================================================
   SOAL 65 - Pola 15
   000000*
   00000**
   0000***
   000****
   00*****
   0******

   Logika:
   - Jumlah angka 0 makin sedikit tiap baris (rows-i).
   - Jumlah bintang makin banyak tiap baris (i+1).
============================================================ */
function soal65() {
  const rows = 6;

  for (let i = 0; i < rows; i++) {
    console.log("0".repeat(rows - i) + "*".repeat(i + 1));
  }
}

soal65();
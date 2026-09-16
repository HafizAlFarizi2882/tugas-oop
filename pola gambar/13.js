/* ============================================================
   SOAL 63 - Pola 13
   0******
   00*****
   000****
   0000***
   00000**
   000000*

   Logika:
   - Jumlah angka 0 makin banyak tiap baris (i+1).
   - Jumlah bintang makin sedikit tiap baris (rows-i).
   - Total lebar baris selalu konstan = 7.
============================================================ */
function soal63() {
  const rows = 6;

  for (let i = 0; i < rows; i++) {
    console.log("0".repeat(i + 1) + "*".repeat(rows - i));
  }
}

soal63();
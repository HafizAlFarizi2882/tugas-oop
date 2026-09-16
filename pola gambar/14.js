/* ============================================================
   SOAL 64 - Pola 14
   *000000
   **00000
   ***0000
   ****000
   *****00
   ******0

   Logika:
   - Mirror horizontal dari Soal 63: bintang di depan, angka 0 di belakang.
   - Jumlah bintang makin banyak (i+1), jumlah 0 makin sedikit (rows-i).
============================================================ */
function soal64() {
  const rows = 6;

  for (let i = 0; i < rows; i++) {
    console.log("*".repeat(i + 1) + "0".repeat(rows - i));
  }
}

soal64();
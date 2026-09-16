/* ============================================================
   SOAL 58 - Pola 8
   0**********
   0**********
   0**********
   0**********
   0**********
   00000000000

   Logika:
   - 5 baris diawali 1 angka 0 lalu diikuti bintang.
   - Baris terakhir semua angka 0.
============================================================ */
function soal58() {
  const width = 11;

  for (let i = 0; i < 5; i++) {
    console.log("0" + "*".repeat(width - 1));
  }
  console.log("0".repeat(width));
}

soal58();
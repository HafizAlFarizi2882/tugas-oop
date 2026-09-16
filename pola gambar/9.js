/* ============================================================
   SOAL 59 - Pola 9
   **********0
   **********0
   **********0
   **********0
   **********0
   00000000000

   Logika:
   - Kebalikan dari Soal 58: bintang dulu, baru 1 angka 0 di akhir baris.
   - Baris terakhir semua angka 0.
============================================================ */
function soal59() {
  const width = 11;

  for (let i = 0; i < 5; i++) {
    console.log("*".repeat(width - 1) + "0");
  }
  console.log("0".repeat(width));
}

soal59();
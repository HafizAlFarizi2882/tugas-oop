/* ============================================================
   SOAL 62 - Pola 12
   00000000000
   **********0
   **********0
   **********0
   **********0
   **********0

   Logika:
   - Baris pertama semua angka 0.
   - Baris berikutnya: bintang dulu, lalu 1 angka 0 di akhir.
============================================================ */
function soal62() {
  const width = 11;

  console.log("0".repeat(width));
  for (let i = 0; i < 5; i++) {
    console.log("*".repeat(width - 1) + "0");
  }
}

soal62();
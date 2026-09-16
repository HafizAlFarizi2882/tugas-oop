/* ============================================================
   SOAL 54 - Pola 4
   *         *
   **       **
   ***     ***
   ****   ****
   ***** *****
   ***********

   Logika:
   - Kebalikan dari Pola 1 (Soal 51): bintang kiri-kanan makin BANYAK,
     gap di tengah makin KECIL.
   - Baris terakhir full bintang (gap = 0).
============================================================ */
function soal54() {
  const rows = 6;
  const width = 2 * rows - 1; // 11

  for (let i = 0; i < rows; i++) {
    if (i === rows - 1) {
      console.log("*".repeat(width));
    } else {
      const bintang = i + 1;
      const gap = width - 2 * bintang;
      console.log("*".repeat(bintang) + " ".repeat(gap) + "*".repeat(bintang));
    }
  }
}

soal54();
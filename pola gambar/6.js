/* ============================================================
   SOAL 56 - Pola 6
     *
    **
   ***
   *
   **
   ***

   Logika:
   - Segitiga pertama (baris 0-2) rata kanan (spasi mengecil: 2,1,0).
   - Segitiga kedua (baris 3-5) rata kiri (spasi = 0).
============================================================ */
function soal56() {
  for (let i = 0; i < 6; i++) {
    if (i < 3) {
      const bintang = i + 1;
      const spasi = 2 - i;
      console.log(" ".repeat(spasi) + "*".repeat(bintang));
    } else {
      const bintang = i - 3 + 1;
      console.log("*".repeat(bintang));
    }
  }
}

soal56();
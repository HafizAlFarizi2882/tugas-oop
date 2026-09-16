/* ============================================================
   SOAL 61 - Pola 11
   00000000000
   0**********
   0**********
   0**********
   0**********
   0**********

   Logika:
   - Baris pertama semua angka 0.
   - Baris berikutnya: 1 angka 0 di depan lalu bintang.
     (kebalikan urutan Soal 58)
============================================================ */
function soal61() {
  const width = 11;

  console.log("0".repeat(width));
  for (let i = 0; i < 5; i++) {
    console.log("0" + "*".repeat(width - 1));
  }
}

soal61();
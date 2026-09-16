/* ============================================================
   SOAL 69 - Pola 19
   0000000
   0*****0
   0*****0
   0*****0
   0*****0
   0000000

   Logika:
   - Baris atas & bawah semua angka 0 (seperti bingkai).
   - Baris tengah: dibungkus angka 0 di kiri-kanan, isinya bintang.
============================================================ */
function soal69() {
  const lebar = 7;

  console.log("0".repeat(lebar));
  for (let i = 0; i < 4; i++) {
    console.log("0" + "*".repeat(lebar - 2) + "0");
  }
  console.log("0".repeat(lebar));
}

soal69();
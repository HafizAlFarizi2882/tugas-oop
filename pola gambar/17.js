/* ============================================================
   SOAL 67 - Pola 17
   000000*
   00000*0
   0000*00
   000*000
   00*0000
   0*00000

   Logika:
   - Cuma ada 1 bintang per baris, posisinya geser ke KIRI tiap baris.
   - Dibangun pakai array 7 elemen berisi "0",
     lalu 1 posisi diganti jadi "*" sesuai barisnya.
============================================================ */
function soal67() {
  const lebar = 7;

  for (let i = 0; i < 6; i++) {
    const posisiBintang = lebar - 1 - i; // makin ke kiri tiap baris
    const baris = new Array(lebar).fill("0"); // array basic
    baris[posisiBintang] = "*";
    console.log(baris.join(""));
  }
}

soal67();
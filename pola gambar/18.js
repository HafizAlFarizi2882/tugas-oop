/* ============================================================
   SOAL 68 - Pola 18
   *000000
   0*00000
   00*0000
   000*000
   0000*00
   00000*0

   Logika:
   - Sama seperti Soal 67, tapi bintang geser dari KIRI ke KANAN.
   - Dibangun pakai array 7 elemen berisi "0",
     lalu 1 posisi diganti jadi "*" sesuai barisnya.
============================================================ */
function soal68() {
  const lebar = 7;

  for (let i = 0; i < 6; i++) {
    const posisiBintang = i; // makin ke kanan tiap baris
    const baris = new Array(lebar).fill("0");
    baris[posisiBintang] = "*";
    console.log(baris.join(""));
  }
}

soal68();
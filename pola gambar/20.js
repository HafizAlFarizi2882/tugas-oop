/* ============================================================
   SOAL 70 - Pola 20
   0000000
   *******
   =======
   0000000
   *******
   =======

   Logika:
   - Ada 3 baris pola yang beda (0, *, =), diulang 2 kali.
   - Pakai operator modulo (%) supaya baris ke-4,5,6
     otomatis mengulang baris 1,2,3.
============================================================ */
function soal70() {
  const lebar = 7;
  const karakter = ["0", "*", "="]; // array basic untuk simpan 3 karakter pola

  for (let i = 0; i < 6; i++) {
    const c = karakter[i % 3]; // modulo bikin polanya berulang
    console.log(c.repeat(lebar));
  }
}

soal70();
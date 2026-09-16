/* ============================================================
   SOAL 66 - Pola 16
   000000*
   00000**
   0000***
   000****
   00*****
   0******

   Logika:
   - Pola ini di PDF identik dengan Pola 15 (Soal 65),
     jadi logikanya sama persis.
============================================================ */
function soal66() {
  const rows = 6;

  for (let i = 0; i < rows; i++) {
    console.log("0".repeat(rows - i) + "*".repeat(i + 1));
  }
}

soal66();
const lebarBaris = 30; // Panjang lintasan karakter
let posisi = 0;        // Posisi angka 0 saat ini
let arah = 1;          // 1 = bergerak ke kanan, -1 = bergerak ke kiri

function jalankanAnimasi() {
  // Membersihkan layar konsol
  console.clear();

  // Membuat string spasi sebelum angka '0'
  let baris = " ".repeat(posisi) + "0";
  console.log(baris);

  // Ubah posisi angka
  posisi += arah;

  // Jika mencapai batas kanan atau kiri, balikkan arah
  if (posisi === lebarBaris - 1 || posisi === 0) {
    arah *= -1; // Mengubah arah (1 menjadi -1, atau -1 menjadi 1)
  }
}

// Jalankan animasi setiap 100 milidetik (0.1 detik)
setInterval(jalankanAnimasi, 100);
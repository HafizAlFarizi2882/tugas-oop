// Loop dimulai dari 6
// kemudian turun sampai 1
for (let i = 6; i >= 1; i--) {

    // Variabel kosong untuk menyimpan bintang
    let hasil = "";

    // Jumlah bintang dihitung dengan rumus
    // (i * 2) - 1
    for (let j = 1; j <= (i * 2) - 1; j++) {

        // Tambahkan satu bintang
        hasil += "*";
    }

    // Tampilkan hasil satu baris
    console.log(hasil);
}
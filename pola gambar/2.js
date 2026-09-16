// Loop untuk membuat 6 baris
for (let i = 1; i <= 6; i++) {

    // Variabel kosong untuk menampung bintang
    let hasil = "";

    // Loop untuk menentukan jumlah bintang
    // Jumlah bintang = (i * 2) - 1
    for (let j = 1; j <= (i * 2) - 1; j++) {

        // Tambahkan satu bintang
        hasil += "*";
    }

    // Tampilkan hasil dari baris tersebut
    console.log(hasil);
}
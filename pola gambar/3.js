// Loop pertama digunakan untuk mengulang pola sebanyak 2 kali
for (let kelompok = 1; kelompok <= 2; kelompok++) {

    // Loop kedua membuat 3 baris
    for (let i = 1; i <= 3; i++) {

        // Variabel kosong untuk menyimpan bintang
        let hasil = "";

        // Loop ketiga menentukan jumlah bintang
        // sesuai dengan nilai i
        for (let j = 1; j <= i; j++) {

            // Tambahkan satu bintang
            hasil += "*";
        }

        // Tampilkan hasil satu baris
        console.log(hasil);
    }
}
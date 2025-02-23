// Kalkulator sederhana

const solution = require('./solution');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function kalkulator() {
        console.log(`
            ====== KALKULATOR SEDERHANA ======
            Pilih operasi matematika:
            1. Penjumlahan
            2. Pengurangan
            3. Perkalian
            4. Pembagian
            5. Pangkat
            6. Faktorial
            7. Cek Prima
            8. Modulus
            9. Nilai Absolut
            10. Maksimum
            11. Minimum
            12. Bulatkan
            0. Keluar
        `);
    

    rl.question("Masukkan pilihan (1-12): ", (choice) => {
        let a, b;
        if ([1, 2, 3, 4, 5, 8, 10, 11].includes(parseInt(choice))) {
            rl.question("Masukkan angka pertama: ", (num1) => {
                rl.question("Masukkan angka kedua: ", (num2) => {
                    a = parseFloat(num1);
                    b = parseFloat(num2);
                    hitung(choice, a, b);
                });
            });
        } else if ([6, 7, 9, 12].includes(parseInt(choice))) {
            rl.question("Masukkan angka: ", (num) => {
                a = parseFloat(num);
                hitung(choice, a);
            });
        } else if ([0].includes(parseInt(choice))) {
            console.log("Terima kasih sudah menggunakan kalkulator sederhana kami ^-^");
            rl.close();
            return;
        } else {
            console.log("Pilihan tidak valid!");
            rl.close();
        }
    });
}

function hitung(choice, a, b) {
    let hasil;
    switch (parseInt(choice)) {
        case 1: hasil = solution.tambah(a, b); break;
        case 2: hasil = solution.kurang(a, b); break;
        case 3: hasil = solution.kali(a, b); break;
        case 4: hasil = solution.bagi(a, b); break;
        case 5: hasil = solution.pangkat(a, b); break;
        case 6: hasil = solution.faktorial(a); break;
        case 7: hasil = solution.isPrima(a); break;
        case 8: hasil = solution.modulus(a, b); break;
        case 9: hasil = solution.absolut(a); break;
        case 10: hasil = solution.maksimum(a, b); break;
        case 11: hasil = solution.minimum(a, b); break;
        case 12: hasil = solution.bulatkan(a); break;
        default: console.log("Pilihan tidak valid"); rl.close(); return;
    }
    console.log("Hasil: ", hasil);
    rl.close();
}

kalkulator();

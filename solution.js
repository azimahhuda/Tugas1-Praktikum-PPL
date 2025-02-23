/**
 * Mengembalikan hasil penjumlahan dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function tambah(a, b) {
}

/**
 * Mengembalikan hasil pengurangan dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function kurang(a, b) {
}

/**
 * Mengembalikan hasil perkalian dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function kali(a, b) {
}

/**
 * Mengembalikan hasil pembagian dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number | string}
 */
function bagi(a, b) {
 
}

/**
 * Mengembalikan hasil pangkat dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function pangkat(a, b) {
}

/**
 * Mengembalikan faktorial dari sebuah angka.
 * @param {number} n 
 * @returns {number}
 */
function faktorial(n) {
    if (n === 0) return 1;
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}

/**
 * Mengembalikan true jika angka adalah bilangan prima, false jika tidak.
 * @param {number} n 
 * @returns {boolean}
 */
function isPrima(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Mengembalikan hasil dari a modulus b.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function modulus(a, b) {
    return a % b;
}

/**
 * Mengembalikan nilai absolut dari sebuah angka.
 * @param {number} a 
 * @returns {number}
 */
function absolut(a) {
    return Math.abs(a);
}

/**
 * Mengembalikan nilai terbesar dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function maksimum(a, b) {
    return Math.max(a, b);
}

/**
 * Mengembalikan nilai terkecil dari dua angka.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function minimum(a, b) {
}

/**
 * Mengembalikan hasil dari a dibulatkan ke bilangan bulat terdekat.
 * @param {number} a 
 * @returns {number}
 */
function bulatkan(a) {
}

// Export hasil akhir
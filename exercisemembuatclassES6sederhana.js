/*
Buatlah sebuah Class Mobil, yang memiliki atribut berikut:

Merek,
Harga,
Warna,
Bensin, dan
Jumlah Roda.
Class tersebut juga bisa memanggil function dengan proses sebagai berikut:

tampilkanSpesifikasi: menampilkan melalui console.log merek, harga, warna, bensin, dan jumlah roda dengan format berikut:
"Mobil saya bermerek Hando dengan harga 300000000 rupiah, berwarna merah, bensinnya solar, dan beroda 4".

jualMobil: menampilkan melalui console.log harga mobil yang dikurangi 20%.
*/

class Mobil {
    constructor(merk, harga, warna, bensin, jumlahRoda) {

        this.merk = merk;
        this.harga = harga;
        this.warna = warna;
        this.bensin = bensin;
        this.jumlahRoda = jumlahRoda;
    }
    setMerk(newMerk) {
        this.merk = newMerk;
    }
    setHarga(newHarga) {
        this.harga = newHarga;
    }
    setWarna(newWarna) {
        this.warna = newWarna;
    }
    setBensin(newBensin) {
        this.bensin = newBensin;
    }
    setJumlahRoda(newJumlahRoda) {
        this.jumlahRoda = newJumlahRoda;
    }
    getMerk() {
        return this.merk;
    }
    getHarga() {
        return this.harga;
    }
    getWarna() {
        return this.warna;
    }
    getBensin() {
        return this.bensin;
    }
    getJumlahRoda() {
        return this.jumlahRoda;
    }
    getArea() {
        let area = "Mobil saya bermerk " + this.merk + " dengan harga " + this.harga + " rupiah, berwarna " + this.warna + ", bensinya " + this.bensin + ", dan beroda " + this.jumlahRoda;
        return area
    }
}

let myCar = new Mobil();

let merk = "Hando";
let harga = 300000000;
let warna = "merah";
let bensin = "solar";
let jumlahRoda = 4; zzz

myCar.setMerk(merk);
myCar.setHarga(harga);
myCar.setWarna(warna);
myCar.setBensin(bensin);
myCar.setJumlahRoda(jumlahRoda);

console.log(myCar.getArea());


//jual mobil//
class JualMobil {
    constructor(harga) {
        this.harga = harga;
    }
    setHarga(harga) {
        this.harga = harga;
    }
    getHarga() {
        return this.harga;
    }
    getArea() {
        let area = "harga mobilnya adalah  " + (this.harga - (this.harga * 0.2)) + " rupiah";
        return area;
    }
}

let myMobil = new JualMobil();
myMobil.setHarga(harga);

console.log(myMobil.getArea());
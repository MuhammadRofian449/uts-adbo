class Cuti{ 
jenisCuti;
kuotaMaksimum;

constructor(nama,maxKuota){
    this.jenisCuti = nama;
    this.kuotaMaksimum = maxKuota;
}

cekValidasi(namaKaryawan, lamaCuti){

    if(this.kuotaMaksimum < lamaCuti){
        console.log(`------------------------ 
Pengajuan Cuti Karyawan
Nama Karyawan : ${namaKaryawan}
Jenis Cuti : ${this.jenisCuti} 
Jumlah hari : ${lamaCuti} hari
Status :  DI TOLAK ❌
Batas maksimum : ${this.kuotaMaksimum} hari
------------------------`);
        return false;
    }

    const sisaKuota = this.kuotaMaksimum - lamaCuti;

    console.log(`-----------------------
Pengajuan Cuti Karyawan
Nama Karyawan : ${namaKaryawan}
Jenis cuti : ${this.jenisCuti} 
Jumlah hari : ${lamaCuti} hari
Status : DI TERIMA✅
Sisa kuota : ${sisaKuota} hari
-----------------------`);
    return true;
}
}

class CutiTahunan extends Cuti {
    constructor(){
        super("Cuti Tahunan",  12)
    }
}

class CutiSakit extends Cuti{
    constructor(){
        super("Cuti Sakit",  2)
    }
}

class CutiMelahirkan extends Cuti{
    constructor(){
        super("Cuti Melahirkan",  90)
    }
}

const cutiTahunan = new CutiTahunan();
const cutiSakit = new CutiSakit();
const cutiMelahirkan = new CutiMelahirkan();

cutiTahunan.cekValidasi("Rof",12);
cutiSakit.cekValidasi("Raf", 30);
cutiMelahirkan.cekValidasi("Rif", 50);
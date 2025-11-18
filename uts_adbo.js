class Cuti {
    nama_jenis;
    kuota_maksimum;

    constructor(nama, maxKuota) {
        this.nama_jenis = nama;
        this.kuota_maksimum = maxKuota;
    }

    hitungPenguranganKuota(lamaCuti) {  
        return lamaCuti;
    }

    cekValidasiKuota(kuotaTersisa, lamaCuti) {
        const pengurangan = this.hitungPenguranganKuota(lamaCuti);
        
        if (kuotaTersisa < pengurangan) {
            console.log(`❌ Kuota anda tidak cukup (${kuotaTersisa} hari tersisa) untuk mengajukan ${this.nama_jenis} selama ${lamaCuti} hari.`);
            return false;
        }
        console.log(`✅ Pengajuan ${this.nama_jenis} (${lamaCuti} hari) valid.`);
        return true;
    }
}

// ----------------------------------------------------

class CutiSakit extends Cuti {
    constructor() {
        super("Cuti Sakit", 2); 
    }
    
    hitungPenguranganKuota(lamaCuti) {
        return 0; 
    }
}

class CutiTahunan extends Cuti {
    constructor() {
        super("Cuti Tahunan", 12);
    }
}

class CutiMelahirkan extends Cuti {
    constructor() {
        super("Cuti Melahirkan", 90); 
    }

    hitungPenguranganKuota(lamaCuti) {
        return 0; 
    }
}

// ----------------------------------------------------

const kuotaTersisaKaryawan = 10;
const cutiTahunan = new CutiTahunan();
const cutiSakit = new CutiSakit();
const cutiMelahirkan = new CutiMelahirkan();

console.log(`--- Uji Coba: Kuota Tersisa Karyawan = ${kuotaTersisaKaryawan} hari ---`);

console.log("\n--- Cuti Tahunan (Max: 12) ---");
cutiTahunan.cekValidasiKuota(kuotaTersisaKaryawan, 11); 
cutiTahunan.cekValidasiKuota(kuotaTersisaKaryawan, 5); 

console.log("\n--- Cuti Sakit (Max: 2) ---");
cutiSakit.cekValidasiKuota(kuotaTersisaKaryawan, 2); 

console.log("\n--- Cuti Melahirkan (Max: 90) ---");
cutiMelahirkan.cekValidasiKuota(kuotaTersisaKaryawan, 90);
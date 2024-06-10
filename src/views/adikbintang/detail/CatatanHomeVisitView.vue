<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-20 p-5">
            <div class="bg-white w-full rounded pb-5">
                <div class="bg-gray-300 w-full flex justify-center rounded-t">
                    <div class="w-40 -mb-12 pt-5">
                        <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-full border-soft-blue border-8">
                    </div>
                </div>
                
                <div class="text-center mt-20">
                    <h2 class="font-bold text-3xl">Sakamoto</h2>
                    <span class="text-xl">15 Tahun</span>
                </div>
                
                <!-- Menu pada profile adik bintang -->
                <AdikBintagProfileMenu />
                
                <div class="px-10 mt-10">
                    <div class="mb-10">
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Catatan Home Visit</h3>
                        <hr class="w-full my-1 bg-gray-200">
                        <div class="py-3">
                            <h4 class="font-base font-bold text-black my-2">Pekerjaan dan Pendapatan</h4>
                            <p class="text-gray-600 font-opensans text-base">
                                Sakamoto merupakan anak keempat dari tujuh bersaudara pasangan Sudiyo dan Sarini. Ia tinggal bersama ayah,ibu dan 4orang saudaranya, sedang 2 orang kakaknya tinggal dipesantren. Sehari-hari Bapak Sudiyo bekerja sebagai seorang buruh pengangkut pasir yang dengan penghasilan Rp 100.000/hari. Bapak tidak setiap hari bekerja, sehingga sebagian penghasilanya disimpan. Ibu Sarini merupakan seorang ibu rumah tangga dengan sambilan membuat kerajinan gentong dari pelepah pisang dengan penghasilan sebesar Rp 10.000/hari. Jika kebutuhan sudah sangat mendesak maka keluarga ini akan meminjam uang ke tetangga. Bantuan dari pemerintah yang diterima oleh keluarga ini berupa PIP yang besarnya Rp 450.000/tahun, PKH senilai Rp 500.000/3 bulan dan sembako senilai 110.000
                            </p>
                        </div>
                        <div class="py-3">
                            <h4 class="font-base font-bold text-black my-2">Pengeluaran dan Tanggungan</h4>
                            <p class="text-gray-600 font-opensans text-base">
                                Bapak Sudiyo memiliki tanggungan delapan orang yakni istri dan ketujuh anaknya. ada 2 anaknya yang tinggal dipondok. Kebutuhan harian/mingguan/bulanan :
                                - Makan dan belanja kebutuhan sehari-hari : Rp 70.000/hari
                                - Uang saku anak : Rp8000-10.000/hari dan 300.000/bulan untuk yang di pondok
                                - Bensin : 1 liter /hari
                                
                                Tagihan - tagihan :
                                - Listrik : Rp 35.000/bulan dari Daya 450V
                                - Pajak : PBB Rp 50.000/tahun
                                
                                Biaya kebutuhan sekolah :
                                - Iuran sukarela : Rp 10.000/bulan
                                - LKS : Rp 150.000/bulan
                                - Buku tulis dan alat tulis : Rp 100.000
                                
                                Pinjaman (hutang) yang dimiliki oleh keluarga ini sebesar Rp 100.000
                            </p>
                        </div>
                        <div class="py-3">
                            <h4 class="font-base font-bold text-black my-2">Aset yang dimiliki</h4>
                            <p class="text-gray-600 font-opensans text-base">
                                Aset tak bergerak : -
                                
                                Aset bergerak :
                                - Hewan ternak : Tidak ada
                                - Peralatan elektronik : tv, kipas angin
                                - Kendaraan : 1 sepeda motor
                                
                                Rumah yang saat ini ditempati keluarga adalah rumah milik pribadi
                                Keluarga ini tidak memiliki tabungan dibank, namun setiap kali mendapatkan uang maka akan disisihkan untuk ditabung dirumah.
                            </p>
                        </div>
                        <div class="py-3">
                            <h4 class="font-base font-bold text-black my-2">Dukungan Orang Tua</h4>
                            <p class="text-gray-600 font-opensans text-base">
                                Sakamoto mempunyai cita-cita ingin menjadi seorang guru. Kedua orangtuanya sangat mendukung Dewi mencapai cita-citanya tersebut. Mereka selalu mendampingi anaknya belajar. JIka sudah besar nanti kedua orangtuanya berharap agar Dewi memjadi anak yang sholehah.
                            </p>
                        </div>
                        
                        <h3 class="text-lg text-soft-blue font-semibold text-center mt-10">Berkas Home Visit</h3>
                        <hr class="w-full my-1 bg-gray-200">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            <img src="../../../../public/img/visit-1.jpg" alt="" class="rounded-lg w-full">
                            <img src="../../../../public/img/visit-2.jpg" alt="" class="rounded-lg w-full">
                            <img src="../../../../public/img/visit-3.jpg" alt="" class="rounded-lg w-full">
                        </div>
                        
                        
                        <h3 class="text-lg text-soft-blue font-semibold text-center mt-10">Data Home Visit</h3>
                        <hr class="w-full my-1 bg-gray-200">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            <div class="py-3 flex flex-col">
                                <span class="font-semibold">Tanggal Home Visit</span>
                                <span class="text-gray-600">1 Maret 2016</span>
                            </div>
                            <div class="py-3 flex flex-col">
                                <span class="font-semibold">Narasumber</span>
                                <span class="text-gray-600">Ibu Yekaterina</span>
                            </div>
                            <div class="py-3 flex flex-col">
                                <span class="font-semibold">Nama Pewawancara 1</span>
                                <span class="text-gray-600">Gremyashchiy</span>
                            </div>
                            <div class="py-3 flex flex-col">
                                <span class="font-semibold">Nama Pewawancara 2</span>
                                <span class="text-gray-600">Lauria</span>
                            </div>
                            <div class="py-3 flex flex-col">
                                <span class="font-semibold">Hasil Home Visit</span>
                                <span class="text-gray-600">Lolos</span>
                            </div>
                            <div class="py-3 flex flex-col">
                                <span class="font-semibold">Alasan</span>
                                <p class="text-gray-600">
                                    Walaupun penghasilan ayah sudah cukup besar, akan tetapi tanggungan keluarga ini cukup banyak. Anak yang masih usia sekolah ada 6 orang sehingga dirasa keluarga ini masih sangat membutuhkan bantuan utnuk pendidikan anak - anaknya.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import AdikBintagProfileMenu from '../../../components/AdikBintangProfileMenu.vue'
</script>

<style lang="scss" scoped>

</style>
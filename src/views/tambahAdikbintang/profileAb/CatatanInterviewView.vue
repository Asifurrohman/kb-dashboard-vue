<template>
    <div class="bg-white w-full rounded pb-5">
        <div class="bg-gray-300 w-full flex justify-center rounded-t">
            <div class="w-40 -mb-12 pt-5">
                <img src="../../../../public/img/klee.jpg" alt="" class="h-40 w-full object-cover rounded-full border-soft-blue border-8">
            </div>
        </div>

        <div class="text-center mt-20">
            <h2 class="font-bold text-3xl">Klee</h2>
            <span class="text-xl">15 Tahun</span>
        </div>

        <!-- Menu pada profile adik bintang -->
        <TambahAdikBintagProfileMenu />

        <div class="px-10 mt-10">
            <div class="mb-10">
                <h3 class="text-lg text-soft-blue font-semibold text-center">Catatan Interview Adik Bintang</h3>
                <hr class="w-full my-1 bg-gray-200">
                <div class="py-3">
                    <h4 class="font-base font-bold text-black my-2">Tentang Adik Bintang</h4>
                    <p class="text-gray-600 font-opensans text-base">
                        Sakamoto bangun tidur pukul 05.30, mandi, sarapan, kemudian bersiap pergi ke sekolah. Ia berangkat pukul 06.30 diantar oleh ibunya. Selesai sekolah pukul 12.00. Sampai rumah belajar kemudian bermain sampai sore. Petang ia belajar sampai pukul 19.00. Setelah itu ngaji sendiri di dalam kamar, kemudian nonton tv baru tidur.
                    </p>
                </div>
                <div class="py-3">
                    <h4 class="font-base font-bold text-black my-2">Prestasi Akademis / Non Akademis</h4>
                    <p class="text-gray-600 font-opensans text-base">
                        Sakamoto belum pernah mengikuti kompetisi. Ia tidak mengetahui peringkat di sekolahnya. Akan tetapi, nilainya secara konsisten semakin membaik. tantangannya Ia terlalu banyak main membuatnya malas belajar. kalau belajar ia ditemani oleh Ayahnya.
                    </p>
                </div>
                <div class="py-3">
                    <h4 class="font-base font-bold text-black my-2">Motivasi</h4>
                    <p class="text-gray-600 font-opensans text-base">
                        Ia ingin menjadi perawat agar bisa membantu orang menjadi sehat. Orang tua memotivasinya dengan cara menyemangatinya untuk belajar agar pandai.
                    </p>
                </div>
                <div class="py-3">
                    <h4 class="font-base font-bold text-black my-2">Tentang Beasiswa</h4>
                    <p class="text-gray-600 font-opensans text-base">
                        beasiswa adalah bantuan untuk anak kurang mampu. jika memperoleh beasiswa akan diberikan kepada orang tuanya agar dibelikan perlengkapan sekolah, tas baru, dan membeli seragam. ia butuh beasiswa agar bisa membeli perlengkapan yang diperlukan.
                    </p>
                </div>
                <div class="py-3">
                    <h4 class="font-base font-bold text-black my-2">Lolos atau tidak. Mengapa?</h4>
                    <p class="text-gray-600 font-opensans text-base">
                        Lolos. Motivasi prestasi bagus, terbukti dari nilai yang konsisten. Jumlah tanggungan keluarga cukup banyak, sejumlah 7 orang sehingga layak dibantu.
                    </p>
                </div>

                <h3 class="text-lg text-soft-blue font-semibold text-center mt-10">Tentang Wawancara</h3>
                <hr class="w-full my-1 bg-gray-200">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    <div class="py-3 flex flex-col">
                        <span class="font-semibold">Tanggal Wawancara</span>
                        <span class="text-gray-600">1 Maret 2016</span>
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
                        <span class="font-semibold">Hasil Wawancara</span>
                        <span class="text-gray-600">Lolos</span>
                    </div>
                    <div class="py-3 flex flex-col">
                        <span class="font-semibold">Alasan</span>
                        <p class="text-gray-600">Motivasi prestasi bagus, terbukti dari nilai yang konsisten. Jumlah tanggungan keluarga cukup banyak, sejumlah 7 orang sehingga layak dibantu.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import TambahAdikBintagProfileMenu from '../../../components/TambahAdikBintangProfileMenu.vue'
</script>

<style lang="scss" scoped>

</style>
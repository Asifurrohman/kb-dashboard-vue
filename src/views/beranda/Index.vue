<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-28 p-5">
            
            
            <BerandaLineSeparator>Statistik</BerandaLineSeparator>
            <div class="container m-auto grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                
                <BerandaStatsCard>
                    <template v-slot:stat-text>
                        Adik Bintang Aktif
                    </template>
                    <template v-slot:stat-number>
                        1498
                    </template>
                </BerandaStatsCard>
                
                <BerandaStatsCard>
                    <template v-slot:stat-text>
                        Adik Bintang Alumni
                    </template>
                    <template v-slot:stat-number>
                        1792
                    </template>
                </BerandaStatsCard>
                
                <BerandaStatsCard>
                    <template v-slot:stat-text>
                        Sekolah Terlibat
                    </template>
                    <template v-slot:stat-number>
                        3453
                    </template>
                </BerandaStatsCard>
                
                <BerandaStatsCard>
                    <template v-slot:stat-text>
                        Jangkauan Wilayah
                    </template>
                    <template v-slot:stat-number>
                        24
                    </template>
                </BerandaStatsCard>
            </div>
            <div class="bg-hz-blue rounded flex flex-col sm:flex-row items-center p-5 my-5">
                <img src="../../../public/img/autodebet.svg" alt="" class="w-full sm:w-1/2 h-40 sm:h-64 sm:mr-5">
                <div class="w-full sm:w-1/2 text-white sm:ml-5 text-center sm:text-left mt-5 sm:mt-0">
                    <h2 class="text-2xl sm:text-3xl  font-bold mb-3">Sering Lupa Kirim Donasi?</h2>
                    <p>
                        Tahukah kakak bahwa Hoshizora Foundation menerima donasi dengan <span class="font-bold">metode autodebet</span> dari berbagai jenis bank?
                    </p>
                    <div class="flex gap-2 py-2 justify-center sm:justify-start">
                        <img src="../../../public/img/bank-negeri.svg" alt="" class="h-5">
                        <img src="../../../public/img/bank-swasta.svg" alt="" class="h-5">
                    </div>
                    <div class="mt-4">
                        <a href="https://wa.me/+6285643555530" target="_blank" class="bg-soft-green px-4 py-2 rounded hover:bg-emerald-700 duration-150">Pelajari Selengkapnya</a>
                    </div>
                </div>
            </div>
            
            <div class="mt-5"></div>
            <BerandaLineSeparator>Adik Bintang Yang Belum Memiliki Kakak Bintang</BerandaLineSeparator>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                <CardAdikBintang>
                    <template v-slot:card-image>
                        <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                    </template>
                    <template v-slot:card-name>
                        Vladimir Monomakh
                    </template>
                    <template v-slot:card-kabupaten>
                        Sleman
                    </template>
                    <template v-slot:card-provinsi>
                        DI Yogyakarta
                    </template>
                    <template v-slot:card-jenjang>
                        SMP
                    </template>
                    <template v-slot:card-kelas>
                        8
                    </template>
                    <template v-slot:card-citacita>
                        Saya mempunyai cita-cita menjadi guru karena guru adalah sosok yang mulia dan pi...
                    </template>
                    <template v-slot:card-button>
                        Lihat Detail
                    </template>
                </CardAdikBintang>
            </div>
            
            <div class="mt-5"></div>
            <BerandaLineSeparator>Adik Bintang Saya</BerandaLineSeparator>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                <CardAdikBintang>
                    <template v-slot:card-image>
                        <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                    </template>
                    <template v-slot:card-name>
                        Vladimir Monomakh
                    </template>
                    <template v-slot:card-kabupaten>
                        Sleman
                    </template>
                    <template v-slot:card-provinsi>
                        DI Yogyakarta
                    </template>
                    <template v-slot:card-jenjang>
                        SMP
                    </template>
                    <template v-slot:card-kelas>
                        8
                    </template>
                    <template v-slot:card-citacita>
                        Saya mempunyai cita-cita menjadi guru karena guru adalah sosok yang mulia dan pi...
                    </template>
                    <template v-slot:card-button>
                        Lihat Detail
                    </template>
                </CardAdikBintang>
                
                <CardAdikBintang>
                    <template v-slot:card-image>
                        <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                    </template>
                    <template v-slot:card-name>
                        Vladimir Monomakh
                    </template>
                    <template v-slot:card-kabupaten>
                        Sleman
                    </template>
                    <template v-slot:card-provinsi>
                        DI Yogyakarta
                    </template>
                    <template v-slot:card-jenjang>
                        SMP
                    </template>
                    <template v-slot:card-kelas>
                        8
                    </template>
                    <template v-slot:card-citacita>
                        Saya mempunyai cita-cita menjadi guru karena guru adalah sosok yang mulia dan pi...
                    </template>
                    <template v-slot:card-button>
                        Lihat Detail
                    </template>
                </CardAdikBintang>
            </div>
        </main>
    </div>
</template>

<script setup>
import BerandaStatsCard from '@/components/BerandaStatsCard.vue';
import BerandaLineSeparator from '@/components/BerandaLineSeparator.vue';

import CardAdikBintang from '@/components/CardAdikBintang.vue'
</script>

<style lang="scss" scoped>

</style>
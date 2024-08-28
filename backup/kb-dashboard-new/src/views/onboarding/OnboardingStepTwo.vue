<template>
    <div class="my-16">
        <h1 class="text-2xl font-semibold mb-2">Pilih Program</h1>
        <p>
            Kontribusi apa yang Anda inginkan? Adik Bintang atau Community Fund?
        </p>
    </div>
    <div class="my-10 flex flex-row gap-4">
        <button class="program-button bg-slate-400 hover:bg-slate-600 duration-75 w-full text-hz-white rounded flex flex-col items-center py-5">
            <i class="fa-regular fa-star text-6xl"></i>
            <span class="font-semibold text-xl">Mimpi Anak Negeri</span>
        </button>
        <button class="program-button bg-slate-400 hover:bg-slate-600 duration-75 w-full text-hz-white rounded flex flex-col items-center py-5">
            <i class="fa-solid fa-earth-asia text-6xl"></i>
            <span class="font-semibold text-xl">Community Fund</span>
        </button>
    </div>
    <!-- <div class="">
        <tabs>
            <tab>Tab 1</tab>
            <tab>Tab 2</tab>
            <tab>Tab 3</tab>
            <tab>Tab 4</tab>
        </tabs>
        <div>
            <tabs>
                <tab title="Tab 1">Hello From Tab 1</tab>
                <tab title="Tab 2">Hello From Tab 2</tab>
                <tab title="Tab 3">Hello From Tab 3</tab>
                <tab title="Tab 4">Hello From Tab 4</tab>
            </tabs>
        </div>
    </div> -->
    <div class="w-full">
        <Heading2>Pilih Adik Bintang</Heading2>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-hz-blue hover:text-hz-blue dark:text-hz-blue dark:hover:text-hz-blue border-hz-blue dark:border-hz-blue" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Tersedia</button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="flex gap-1 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                        <div class="bg-gray-200 w-6 h-6 rounded-full">2</div>
                        <div>Dipilih</div>
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Rekomendasi</button>
                </li>
            </ul>
        </div>
        <div id="default-styled-tab-content">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                
                <div class="w-full grid grid-cols-3 gap-4 my-8">
                    <div>
                        <label for="filterJenjang" class="block mb-2 font-medium text-sm">Jenjang Pendidikan</label>
                        <select id="filterJenjang" class="bg-gray-50 text-sm border border-gray-300 text-gray-900 rounded focus:ring-sky-500 focus:border-sky-500 block w-full">
                            <option value="all" selected>Tampilkan Semua</option>
                            <option value="sd">SD</option>
                            <option value="smp">SMP</option>
                            <option value="sma">SMA</option>
                        </select> 
                    </div>
                    <div>
                        <label for="filterJenisKelamin" class="block mb-2 font-medium text-sm">Jenis Kelamin</label>
                        <select id="filterJenisKelamin" class="bg-gray-50 text-sm border border-gray-300 text-gray-900 rounded focus:ring-sky-500 focus:border-sky-500 block w-full">
                            <option value="all" selected>Tampilkan Semua</option>
                            <option value="lakilaki">Laki - Laki</option>
                            <option value="perempuan">Perempuan</option>
                        </select> 
                    </div>
                    <div>
                        <label for="registerGender" class="block mb-2 font-medium text-sm">Terapkan Filter</label>
                        <button class="bg-lime-500 hover:bg-lime-700 duration-75 rounded px-5 py-2 text-sm">
                            Cari Adik Bintang
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div v-for="adikbintang in adikbintangs" v-bind:key="adikbintang.id">
                        <CardAdikbintang>
                            <template v-slot:card-image>
                                <img src="../../../public/img/student-1.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                            </template>
                            <template v-slot:card-nama>
                                {{ adikbintang.nama }}
                            </template>
                            <template v-slot:card-kabupaten>
                                {{ adikbintang.tempat_lahir }}
                            </template>
                            <template v-slot:card-provinsi>
                                belum diisi
                            </template>
                            <template v-slot:card-jenjang>
                                {{ adikbintang.jenjang }}
                            </template>
                            <template v-slot:card-kelas>
                                {{ adikbintang.kelas }}
                            </template>
                            <template v-slot:card-citacita>
                                {{ adikbintang.cita_cita }}
                            </template>
                            <template v-slot:card-button>
                                Lihat Detail
                            </template>
                        </CardAdikbintang>
                    </div>
                </div>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <CardAdikbintang>
                        <template v-slot:card-image>
                            <img src="../../../public/img/student-1.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                        </template>
                        <template v-slot:card-nama>
                            Aldiano Putra Pratama
                        </template>
                        <template v-slot:card-kabupaten>
                            Gunung Kidul
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
                            Cita-cita saya ingin menjadi tentara karena tugas tentara untuk membela negara Ind...
                        </template>
                        <template v-slot:card-button>
                            Lihat Detail
                        </template>
                    </CardAdikbintang>
                    <CardAdikbintang>
                        <template v-slot:card-image>
                            <img src="../../../public/img/student-1.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                        </template>
                        <template v-slot:card-nama>
                            Aldiano Putra Pratama
                        </template>
                        <template v-slot:card-kabupaten>
                            Gunung Kidul
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
                            Cita-cita saya ingin menjadi tentara karena tugas tentara untuk membela negara Ind...
                        </template>
                        <template v-slot:card-button>
                            Lihat Detail
                        </template>
                    </CardAdikbintang>
                    <CardAdikbintang>
                        <template v-slot:card-image>
                            <img src="../../../public/img/student-1.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                        </template>
                        <template v-slot:card-nama>
                            Aldiano Putra Pratama
                        </template>
                        <template v-slot:card-kabupaten>
                            Gunung Kidul
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
                            Cita-cita saya ingin menjadi tentara karena tugas tentara untuk membela negara Ind...
                        </template>
                        <template v-slot:card-button>
                            Lihat Detail
                        </template>
                    </CardAdikbintang>
                </div>    
            </div>
            <div class="hidden rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
                <div class="bg-amber-400 rounded px-5 py-2.5 mb-5">
                    Tidak ada data
                </div>
                <div class="border px-5 py-2.5 flex justify-between">
                    <div class="w-3/5">
                        <h2 class="font-semibold text-xl mb-5">Bingung Memilih Adik Bintang?</h2>
                        <p>
                            Jika tidak ada Adik Bintang yang dipilih atau anda bingung memilih Adik Bintang, maka Anda bisa meminta bantuan kami untuk memilihkan Adik Bintang untuk anda.
                        </p>
                    </div>
                    <div class="w-1/5 flex justify-end items-start">
                        <button class="bg-lime-500 hover:bg-lime-700 duration-75 px-5 py-2.5 rounded text-white">Pilihkan Adik</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        <!-- <div>
            
            <div class="w-full grid grid-cols-3 gap-4 my-8">
                <div>
                    <label for="filterJenjang" class="block mb-2 font-medium text-sm">Jenjang Pendidikan</label>
                    <select id="filterJenjang" class="bg-gray-50 text-sm border border-gray-300 text-gray-900 rounded focus:ring-sky-500 focus:border-sky-500 block w-full">
                        <option value="all" selected>Tampilkan Semua</option>
                        <option value="sd">SD</option>
                        <option value="smp">SMP</option>
                        <option value="sma">SMA</option>
                    </select> 
                </div>
                <div>
                    <label for="filterJenisKelamin" class="block mb-2 font-medium text-sm">Jenis Kelamin</label>
                    <select id="filterJenisKelamin" class="bg-gray-50 text-sm border border-gray-300 text-gray-900 rounded focus:ring-sky-500 focus:border-sky-500 block w-full">
                        <option value="all" selected>Tampilkan Semua</option>
                        <option value="lakilaki">Laki - Laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select> 
                </div>
                <div>
                    <label for="registerGender" class="block mb-2 font-medium text-sm">Terapkan Filter</label>
                    <button class="bg-lime-500 hover:bg-lime-700 duration-75 rounded px-5 py-2 text-sm">
                        Cari Adik Bintang
                    </button>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <CardAdikbintang>
                    <template v-slot:card-image>
                        <img src="../../../public/img/student-1.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                    </template>
                    <template v-slot:card-nama>
                        Aldiano Putra Pratama
                    </template>
                    <template v-slot:card-kabupaten>
                        Gunung Kidul
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
                        Cita-cita saya ingin menjadi tentara karena tugas tentara untuk membela negara Ind...
                    </template>
                    <template v-slot:card-button>
                        Lihat Detail
                    </template>
                </CardAdikbintang>
                <CardAdikbintang>
                    <template v-slot:card-image>
                        <img src="../../../public/img/student-1.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                    </template>
                    <template v-slot:card-nama>
                        Aldiano Putra Pratama
                    </template>
                    <template v-slot:card-kabupaten>
                        Gunung Kidul
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
                        Cita-cita saya ingin menjadi tentara karena tugas tentara untuk membela negara Ind...
                    </template>
                    <template v-slot:card-button>
                        Lihat Detail
                    </template>
                </CardAdikbintang>
                <CardAdikbintang>
                    <template v-slot:card-image>
                        <img src="../../../public/img/student-1.jpg" alt="" class="h-40 w-full object-cover rounded-t">
                    </template>
                    <template v-slot:card-nama>
                        Aldiano Putra Pratama
                    </template>
                    <template v-slot:card-kabupaten>
                        Gunung Kidul
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
                        Cita-cita saya ingin menjadi tentara karena tugas tentara untuk membela negara Ind...
                    </template>
                    <template v-slot:card-button>
                        Lihat Detail
                    </template>
                </CardAdikbintang>
            </div>
        </div> -->
    </div>
    <div class="w-full mt-10 flex justify-between">
        <button class="focus:outline-none bg-gray-200 hover:bg-gray-300 duration-75 focus:ring-4 font-medium rounded px-5 py-2.5 me-2 mb-2">
            Kembali
        </button>
        <button class="focus:outline-none bg-lime-500 hover:bg-lime-700 duration-75 focus:ring-4 font-medium rounded px-5 py-2.5 me-2 mb-2">
            Lanjut
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Heading2 from '../../components/Heading2.vue'
import Tab from '@/components/Tab.vue'
import Tabs from '@/components/Tabs.vue'
import CardAdikbintang from '@/components/CardAdikbintang.vue'
</script>

<script>
export default {
    components: {
        Tab,
        Tabs
    },
    data(){
        return{
            adikbintangs: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/adikbintang')
        .then(res => res.json())
        .then(data => this.adikbintangs = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
.program-button:active{
    background-color: aqua;
}
</style>
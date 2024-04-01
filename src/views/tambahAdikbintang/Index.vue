<template>
    <div>
        <h1 class="text-3xl font-semibold">Tambah Adik Bintang</h1>
        <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
        
        <!-- <div class="bg-white py-2 px-5 mb-5 rounded-lg text-sm flex">
            <RouterLink to="/tambah-adik-bintang" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Tersedia
            </RouterLink>
            <RouterLink to="tambah-adik-bintang/dipilih-adik-bintang" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Dipilih
            </RouterLink>
            <RouterLink to="tambah-adik-bintang/rekomendasi-adik-bintang" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Rekomendasi
            </RouterLink>
        </div> -->

        <TambahAdikBintangMenu />
        
        <div class="w-full mb-5">
            <form action="" class="text-sm grid grid-cols-2 sm:grid-cols-3 gap-5">
                <div class="flex flex-col">
                    <label for="jenjang" class="mb-2 font-semibold">Jenjang Pendidikan</label>
                    <select name="jenjang" id="jenjang" class="p-2 rounded focus:outline-soft-green">
                        <option value="semuajenjang">Tampilkan Semua</option>
                        <option value="sd">SD</option>
                        <option value="smp">SMP</option>
                        <option value="sma">SMA</option>
                    </select>
                </div>
                <div class="flex flex-col">
                    <label for="jenisKelamin" class="mb-2 font-semibold">Jenis Kelamin</label>
                    <select name="jenis_kelamin" id="jenisKelamin" class="p-2 rounded focus:outline-soft-green">
                        <option value="semuakelamin">Tampilkan Semua</option>
                        <option value="laki-laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </div>
                <div class="flex flex-col">
                    <span class="mb-2 font-semibold">Terapkan Filter</span>
                    <button class="py-2 bg-soft-green hover:bg-emerald-500 rounded text-white" type="button">Cari Adik Bintang</button>
                </div>
            </form>
        </div>
        
        <div class="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white p-5 rounded">
            <div class="bg-white border hover:border-soft-blue rounded-lg overflow-hidden shadow-md">
                <img src="../../../public/img/klee.jpg" class="h-48 w-full object-cover" alt="">
                <div class="px-2 pt-5">
                    <div class="flex items-baseline flex-col">
                        <h4 class="text-lg font-semibold mb-1">Klee</h4>
                        <span class="text-sm text-gray-600 mb-5">
                            Sleman - DI Yogyakarta
                        </span>
                        <p class="text-gray-600 text-sm font-opensans">
                            Cita-cita saya menjadi perawat yang sukses dan baik. saya bercita-cita menjadi p...
                        </p>
                    </div>
                </div>
                <hr class="w-full my-4 bg-gray-200">
                <div class="w-full flex justify-center mb-4">
                    <RouterLink to="/tambah-adik-bintang/profile-ab/" class="bg-soft-blue hover:bg-blue-700 text-white w-full mx-2 py-2 rounded text-center">
                        Lihat Detail
                    </RouterLink>
                </div>
            </div>
            <div class="bg-white border hover:border-soft-blue rounded-lg overflow-hidden shadow-md">
                <img src="../../../public/img/klee.jpg" class="h-48 w-full object-cover" alt="">
                <div class="px-2 pt-5">
                    <div class="flex items-baseline flex-col">
                        <h4 class="text-lg font-semibold mb-1">Klee</h4>
                        <span class="text-sm text-gray-600 mb-5">
                            Sleman - DI Yogyakarta
                        </span>
                        <p class="text-gray-600 text-sm font-opensans">
                            Cita-cita saya menjadi perawat yang sukses dan baik. saya bercita-cita menjadi p...
                        </p>
                    </div>
                </div>
                <hr class="w-full my-4 bg-gray-200">
                <div class="w-full flex justify-center mb-4">
                    <RouterLink to="/tambah-adik-bintang/profile-ab/" class="bg-soft-blue hover:bg-blue-700 text-white w-full mx-2 py-2 rounded text-center">
                        Lihat Detail
                    </RouterLink>
                </div>
            </div>
            <div class="bg-white border hover:border-soft-blue rounded-lg overflow-hidden shadow-md">
                <img src="../../../public/img/klee.jpg" class="h-48 w-full object-cover" alt="">
                <div class="px-2 pt-5">
                    <div class="flex items-baseline flex-col">
                        <h4 class="text-lg font-semibold mb-1">Klee</h4>
                        <span class="text-sm text-gray-600 mb-5">
                            Sleman - DI Yogyakarta
                        </span>
                        <p class="text-gray-600 text-sm font-opensans">
                            Cita-cita saya menjadi perawat yang sukses dan baik. saya bercita-cita menjadi p...
                        </p>
                    </div>
                </div>
                <hr class="w-full my-4 bg-gray-200">
                <div class="w-full flex justify-center mb-4">
                    <RouterLink to="/tambah-adik-bintang/profile-ab/" class="bg-soft-blue hover:bg-blue-700 text-white w-full mx-2 py-2 rounded text-center">
                        Lihat Detail
                    </RouterLink>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import TambahAdikBintangMenu from '../../components/TambahAdikBintangMenu.vue'
</script>

<style lang="scss" scoped>

</style>
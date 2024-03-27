<template>
    <div>
        <h1 class="text-3xl font-semibold">Tambah Adik Bintang</h1>
        <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
        
        <div class="bg-white py-2 px-5 mb-5 rounded-lg text-sm flex">
            <RouterLink to="/tambah-adik-bintang" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Tersedia
            </RouterLink>
            <RouterLink to="/dipilih-adik-bintang" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Dipilih
            </RouterLink>
            <RouterLink to="/rekomendasi-adik-bintang" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Rekomendasi
            </RouterLink>
        </div>
        
        <div class="bg-yellow-300 p-5 rounded mb-5">
            <p>Tidak ada data</p>
        </div>
        
        <div class="bg-white p-5 rounded">
            <span class="text-xl font-semibold">Bingung Memilih Adik Bintang?</span>
            <p class="text-gray-600 mb-5">
                Jika tidak ada Adik Bintang yang dipilih atau anda bingung memilih Adik Bintang, maka Anda bisa meminta bantuan kami untuk memilihkan Adik Bintang untuk anda.
            </p>
            
            <button class="bg-soft-green hover:bg-emerald-500 text-white py-2 px-5 rounded text-sm">
                Pilihkan Adik Bintang
            </button>
        </div>
        
        <ModalRequestAdikBintang />
    </div>
</template>

<script>

import ModalRequestAdikBintang from "@/components/ModalRequestAdikBintang.vue"

// import ModalRequestAdikBintang from '../../components/ModalRequestAdikBintang.vue'

// export default {
//     setup(){
//         return {
//             ModalRequestAdikBintang
//         }
//     }
// }
</script>

<style lang="scss" scoped>

</style>
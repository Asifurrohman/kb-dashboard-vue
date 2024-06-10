<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-20 p-5">
            <div>
                <h1 class="text-3xl font-semibold">Tambah Adik Bintang</h1>
                <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
                
                <TambahAdikBintangMenu />
                
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
        </main>
    </div>
</template>

<script setup>

import TambahAdikBintangMenu from '../../components/TambahAdikBintangMenu.vue'
// import ModalRequestAdikBintang from "@/components/ModalRequestAdikBintang.vue"

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
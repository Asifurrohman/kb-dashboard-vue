<template>
    <div class="w-full lg:w-4/5 absolute right-0 font-inter">
        <main id="main" class=" mt-20 p-5">
            <div>
                <h1 class="text-3xl font-semibold">Tambah Adik Bintang</h1>
                <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
                
                <TambahAdikBintangMenu />
                
                <div class="bg-yellow-300 p-5 rounded mb-5">
                    <p>Belum ada Adik Bintang yang ditambahkan</p>
                </div>
                
                <div class="bg-white p-5 rounded">
                    <span class="text-xl font-semibold">Kakak belum memilih adik bintang</span>
                    <p class="text-gray-600 mb-5">
                        Silahkan tambahkan Adik Bintang terlebih dahulu, atau request Adik Bintang apabila Anda bingung memilih.
                    </p>
                    <RouterLink to="tambah-adik-bintang" class="bg-soft-green hover:bg-emerald-500 text-white py-2 px-5 rounded">
                        <span><ion-icon name="add-outline" class="text-white"></ion-icon></span>
                        <span class="text-sm">Tambah Adik Bintang</span>
                    </RouterLink>
                </div>
                
                
            </div>
        </main>
    </div>
</template>

<script setup>
import TambahAdikBintangMenu from '../../components/TambahAdikBintangMenu.vue'
</script>

<style lang="scss" scoped>

</style>
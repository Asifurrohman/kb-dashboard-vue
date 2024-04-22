<template>
    <h1 class="text-3xl font-semibold">Adik Bintang Saya</h1>
    <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
    <div class="bg-white p-5 mb-5 rounded-lg">
        <p class="mb-3">Kakak bisa klik tombol di bawah ini jika ingin menambah adik bintang</p>
        <RouterLink to="/tambah-adik-bintang" class="bg-soft-green hover:bg-emerald-500 text-white py-2 px-5 rounded">
            <span><ion-icon name="add-outline" class="text-white"></ion-icon></span>
            <span class="text-sm">Tambah Adik Bintang</span>
        </RouterLink>
    </div>
    <div class="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white p-5 rounded">
        <div class="bg-white border hover:border-soft-blue rounded-lg overflow-hidden shadow-md">
            <img src="../../../public/img/sakamoto.jpg" class="h-48 w-full object-cover" alt="">
            <div class="px-2 pt-5">
                <div class="flex items-baseline flex-col">
                    <h4 class="text-lg font-semibold mb-1">Sakamoto</h4>
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
                <RouterLink to="/adik-bintang-saya/profile-ab" class="bg-soft-blue hover:bg-blue-700 text-white w-full mx-2 py-2 rounded text-center">
                    Lihat Detail
                </RouterLink>
            </div>
        </div>
        
        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
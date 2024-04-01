<template>
    <div class="bg-white py-2 px-5 mb-5 rounded-lg text-sm flex">
            <RouterLink to="/laporan-donasi" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Donation Meter
            </RouterLink>
            <RouterLink to="/laporan-donasi/ringkasan-donasi" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Ringkasan Donasi
            </RouterLink>
            <RouterLink to="/laporan-donasi/konfirmasi-donasi" activeClass="bg-soft-blue hover:bg-blue-600 text-white hover:text-white py-2 px-5 rounded mr-2" class="hover:text-blue-600 py-2 px-5 rounded mr-2">
                Daftar Konfirmasi Donasi
            </RouterLink>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
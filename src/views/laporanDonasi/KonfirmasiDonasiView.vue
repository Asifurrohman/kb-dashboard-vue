<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-20 p-5">
            <div>
                <h1 class="text-3xl font-semibold">Laporan Donasi</h1>
                <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
                <LaporanDonasiMenu />
                <div class="w-full">
                    
                    <div class="border border-gray-300 rounded-lg">
                        <div class="bg-slate-50 border-b-2 border-gray-200 px-5 py-2 rounded-t-lg flex justify-between items-center">
                            <span class="bg-soft-green text-white text py-2 px-3 rounded-full">Donasi berhasil masuk</span>
                            <span class="text-sm text-gray-600">25 Maret 2024</span>
                        </div>
                        <div class="bg-white p-5 rounded-b-lg flex flex-col">
                            <span class="text-3xl font-bold font-opensans mb-2">Rp300.000</span>
                            <div class="mt-2">
                                <span class=" text-gray-600 bg-slate-200 p-2 rounded">
                                    Donasi untuk <span class="font-semibold">Program Adik Bintang</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import LaporanDonasiMenu from "@/components/LaporanDonasiMenu.vue"
</script>

<style lang="scss" scoped>

</style>
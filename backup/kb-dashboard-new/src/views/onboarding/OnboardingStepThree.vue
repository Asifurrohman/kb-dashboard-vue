<template>
    <div class="my-16">
        <h1 class="text-2xl font-semibold mb-2">Detail Donasi Anda</h1>
        <p>
            Sebelum lanjut ke langkah berikutnya, pastikan Anda sudah mengecek ulang rencana donasi anda yang sudah kami rangkum berikut ini.
        </p>
    </div>
    <div class="w-full">
        <Heading2>Adik Bintang:</Heading2>
        <hr class="border border-gray-100 mb-5">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <OnboardingCard>
                <img class="object-cover w-full h-full rounded-t md:w-48 md:rounded-none md:rounded-s-lg" src="../../../public/img/student-1.jpg" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="text-lg font-semibold tracking-tight text-gray-900">Siregar Tampubolon Hutabarat</h5>
                    <div class="my-4 md:my-2">
                        <span class="flex gap-4 items-start">
                            <i class="fa-solid fa-house min-w-6"></i>
                            <span>
                                KEPULAUAN RIAU - KEPULAUAN ANAMBAS
                            </span>
                        </span>
                        <span class="flex gap-4 items-start">
                            <i class="fa-solid fa-school min-w-6"></i>
                            <span>
                                SMK Negeri 1 Anambas
                            </span>
                        </span>
                    </div>
                    <div class="text-sm text-gray-700">
                        <p>
                            Donasi per bulan: <span class="font-semibold">Rp200.000</span>
                        </p>
                        <p>
                            Target kontribusi (12 bulan): <span class="font-semibold">Rp2.400.000</span>
                        </p>
                    </div>
                    <div class="mt-4">
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">Batal</button>
                    </div>
                </div>
            </OnboardingCard>
            <OnboardingCard>
                <img class="object-cover w-full h-full rounded-t md:w-48 md:rounded-none md:rounded-s-lg" src="../../../public/img/student-2.jpg" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="text-lg font-semibold tracking-tight text-gray-900">Selvi Olivia</h5>
                    <div class="my-4 md:my-2">
                        <span class="flex gap-4 items-start">
                            <i class="fa-solid fa-house min-w-6"></i>
                            <span>
                                SUMATERA SELATAN - MUSI BANYUASIN
                            </span>
                        </span>
                        <span class="flex gap-4 items-start">
                            <i class="fa-solid fa-school min-w-6"></i>
                            <span>
                                SMA Belum Diisi
                            </span>
                        </span>
                    </div>
                    <div class="text-sm text-gray-700">
                        <p>
                            Donasi per bulan: <span class="font-semibold">Rp200.000</span>
                        </p>
                        <p>
                            Target kontribusi (12 bulan): <span class="font-semibold">Rp2.400.000</span>
                        </p>
                    </div>
                    <div class="mt-4">
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">Batal</button>
                    </div>
                </div>
            </OnboardingCard>
        </div>
        <div class="mt-4 px-5 py-2.5 bg-white border border-gray-200 rounded shadow">
            <p class="text-xl">
                Total Target Kontribusi Adik Bintang
            </p>
            <span class="font-semibold text-xl">Rp4.800.000</span>
        </div>
    </div>
    <div class="w-full mt-10">
        <Heading2>Community Fund:</Heading2>
        <hr class="border border-gray-100 mb-5">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            <OnboardingCard>
                <img class="object-cover w-full h-full rounded-t md:w-48 md:rounded-none md:rounded-s-lg" src="../../../public/img/hz-user.png" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="text-lg font-semibold tracking-tight text-gray-900">Community Fund Program</h5>
                    <div class="my-4 md:my-2">
                        <span>
                            Support Hoshizora Foundation
                        </span>
                    </div>
                    <div class="text-sm text-gray-700">
                        <p>
                            Donasi per bulan: <span class="font-semibold">Rp100.000</span>
                        </p>
                    </div>
                    <div class="mt-4">
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">Batal</button>
                    </div>
                </div>
            </OnboardingCard>
        </div>
        <div class="mt-4 px-5 py-2.5 bg-white border border-gray-200 rounded shadow">
            <p class="text-xl">
                Total Target Kontribusi Community Fund
            </p>
            <span class="font-semibold text-xl">Rp1.200.000</span>
        </div>
    </div>
    <div class="w-full mt-10">
        <div class="mt-4 px-5 py-2.5 bg-amber-200 border border-gray-200 rounded shadow">
            <p class="text-2xl">
                Minimal Donasi Bulan Pertama
            </p>
            <span class="font-semibold text-2xl">Rp500.000</span>
        </div>
    </div>
    <div class="w-full mt-10 flex justify-between">
        <button class="focus:outline-none bg-gray-200 hover:bg-gray-300 duration-75 focus:ring-4 font-medium rounded px-5 py-2.5 me-2 mb-2">
            Kembali
        </button>
        <button class="focus:outline-none bg-lime-500 hover:bg-lime-700 duration-75 focus:ring-4 font-medium rounded px-5 py-2.5 me-2 mb-2">
            Donasi Sekarang
        </button>
    </div>
</template>

<script setup>
import Heading2 from '@/components/Heading2.vue'
import OnboardingCard from '@/components/OnboardingCard.vue'
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-28 p-5">
            <BerandaLineSeparator>Tulis Surat Bintang</BerandaLineSeparator>

            <div>
                <p class="mb-2">Pilih adik bintang</p>
                
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Foto</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Nama</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Usia (Tahun)</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Jenjang</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left"></th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">
                                    <img src="../../../public/img/masha.jpg" alt="" class="w-16 h-16 object-cover rounded-full">
                                </td>
                                <td class="p-3 text-sm text-gray-700">Masha Grad</td>
                                <td class="p-3 text-sm text-gray-700">15</td>
                                <td class="p-3 text-sm text-gray-700">SMA</td>
                                <td class="p-3 text-sm text-gray-700">
                                    <router-link to="/adik-bintang-saya/profile-ab/progress-report-ab" class="w-fit bg-soft-green hover:bg-emerald-800 px-5 py-2 rounded text-white flex">
                                        <span class="mr-2 hidden sm:block"><ion-icon name="pencil"></ion-icon></span>
                                        <span>Tulis</span>
                                    </router-link>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">
                                    <img src="../../../public/img/sakamoto.jpg" alt="" class="w-16 h-16 object-cover rounded-full">
                                </td>
                                <td class="p-3 text-sm text-gray-700">Sakamoto</td>
                                <td class="p-3 text-sm text-gray-700">15</td>
                                <td class="p-3 text-sm text-gray-700">SMA</td>
                                <td class="p-3 text-sm text-gray-700">
                                    <router-link to="/adik-bintang-saya/profile-ab/progress-report-ab" class="w-fit bg-soft-green hover:bg-emerald-800 px-5 py-2 rounded text-white flex">
                                        <span class="mr-2 hidden sm:block"><ion-icon name="pencil"></ion-icon></span>
                                        <span>Tulis</span>
                                    </router-link>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">
                                    <img src="../../../public/img/acipu.jpeg" alt="" class="w-16 h-16 object-cover rounded-full">
                                </td>
                                <td class="p-3 text-sm text-gray-700">Kevin Ketimun Laut</td>
                                <td class="p-3 text-sm text-gray-700">15</td>
                                <td class="p-3 text-sm text-gray-700">SMA</td>
                                <td class="p-3 text-sm text-gray-700">
                                    <router-link to="/adik-bintang-saya/profile-ab/progress-report-ab" class="w-fit bg-soft-green hover:bg-emerald-800 px-5 py-2 rounded text-white flex">
                                        <span class="mr-2 hidden sm:block"><ion-icon name="pencil"></ion-icon></span>
                                        <span>Tulis</span>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import BerandaLineSeparator from '@/components/BerandaLineSeparator.vue';
</script>

<style lang="scss" scoped>

</style>
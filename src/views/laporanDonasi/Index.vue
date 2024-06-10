<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-20 p-5">
            <div>
                <h1 class="text-3xl font-semibold">Laporan Donasi</h1>
                <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
                <LaporanDonasiMenu />
                
                <div class="w-full overflow-x-auto bg-white px-2 pt-2 pb-10 rounded">
                    <table class="table-auto border border-inherit rounded">
                        <thead class="border-b-2 uppercase text-sm">
                            <tr class="h-10 text-custom-blue-2">
                                <th class="border-r"></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th><a href="#" class="mx-2 hover:bg-emerald-500 hover:text-white rounded px-3 py-2">2020</a></th>
                                <th><a href="#" class="mx-2 hover:bg-emerald-500 hover:text-white rounded px-3 py-2">2021</a></th>
                                <th><a href="#" class="mx-2 hover:bg-emerald-500 hover:text-white rounded px-3 py-2">2022</a></th>
                                <th><a href="#" class="mx-2 bg-soft-green hover:bg-emerald-500 text-white rounded px-3 py-2">2023</a></th>
                                <th><a href="#" class="mx-2 hover:bg-emerald-500 hover:text-white rounded px-3 py-2">2024</a></th>
                            </tr>
                            <tr>
                                <th class="py-2 px-3 border-r" rowspan="2">Adik Bintang Saya</th>
                                <th class="py-2 px-3 border">Jan</th>
                                <th class="py-2 px-3 border">Feb</th>
                                <th class="py-2 px-3 border">Mar</th>
                                <th class="py-2 px-3 border">Apr</th>
                                <th class="py-2 px-3 border">Mei</th>
                                <th class="py-2 px-3 border">Jun</th>
                                <th class="py-2 px-3 border">Jul</th>
                                <th class="py-2 px-3 border">Agu</th>
                                <th class="py-2 px-3 border">Sep</th>
                                <th class="py-2 px-3 border">Okt</th>
                                <th class="py-2 px-3 border">Nov</th>
                                <th class="py-2 px-3 border">Des</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="broder-b h-10">
                                <td class="py-2 px-3 border-r">
                                    <img src="../../../public/img/sakamoto.jpg" class="h-20 w-full rounded-lg object-cover">
                                    <div class="flex flex-col">
                                        <span class="text-lg font-semibold">Sakamoto</span>
                                        <span class="text-base text-gray-600">SMP N 3 Godean</span>
                                    </div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 px-3 border-r">
                                    <img src="../../../public/img/sakamoto.jpg" class="h-20 w-full rounded-lg object-cover">
                                    <div class="flex flex-col">
                                        <span class="text-lg font-semibold">Sakamoto</span>
                                        <span class="text-base text-gray-600">SMP N 3 Godean</span>
                                    </div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-emerald-500"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3 border-r">
                                    <div class="w-10 h-10 bg-slate-300"></div>
                                </td>
                                <td class="py-2 px-3">
                                    <div class="w-10 h-10 bg-slate-300"></div>
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
import LaporanDonasiMenu from "@/components/LaporanDonasiMenu.vue"
</script>

<style lang="scss" scoped>

</style>
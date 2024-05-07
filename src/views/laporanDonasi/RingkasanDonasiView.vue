<template>
    <div class="w-full lg:w-4/5 absolute right-0 font-inter">
        <main id="main" class=" mt-20 p-5">
            <div>
                <h1 class="text-3xl font-semibold">Laporan Donasi</h1>
                <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
                <LaporanDonasiMenu />
                
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">No</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Program</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Rupiah</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Dollar</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Yen</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">1</td>
                                <td class="p-3 text-sm text-gray-700">25 Jan 2024</td>
                                <td class="p-3 text-sm text-gray-700">Program Adik Bintang</td>
                                <td class="p-3 text-sm text-gray-700">Rp300.000</td>
                                <td class="p-3 text-sm text-gray-700"></td>
                                <td class="p-3 text-sm text-gray-700"></td>
                            </tr>
                            <tr class="bg-gray-100 hover:bg-gray-200">
                                <td class="p-3 text-sm text-gray-700">2</td>
                                <td class="p-3 text-sm text-gray-700">25 Jan 2024</td>
                                <td class="p-3 text-sm text-gray-700">Program Adik Bintang</td>
                                <td class="p-3 text-sm text-gray-700">Rp300.000</td>
                                <td class="p-3 text-sm text-gray-700"></td>
                                <td class="p-3 text-sm text-gray-700"></td>
                            </tr>
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">3</td>
                                <td class="p-3 text-sm text-gray-700">25 Jan 2024</td>
                                <td class="p-3 text-sm text-gray-700">Program Adik Bintang</td>
                                <td class="p-3 text-sm text-gray-700">Rp300.000</td>
                                <td class="p-3 text-sm text-gray-700"></td>
                                <td class="p-3 text-sm text-gray-700"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h2 class="text-soft-blue font-semibold mb-2">Total Program Adik Bintang</h2>
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Rupiah</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Dollar</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Yen</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">Rp25.000.000</td>
                                <td class="p-3 text-sm text-gray-700">200</td>
                                <td class="p-3 text-sm text-gray-700">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h2 class="text-soft-blue font-semibold mb-2">Total Dana Pendidikan</h2>
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Rupiah</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Dollar</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Yen</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">Rp25.000.000</td>
                                <td class="p-3 text-sm text-gray-700">200</td>
                                <td class="p-3 text-sm text-gray-700">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h2 class="text-soft-blue font-semibold mb-2">Total Hibah (Operasional)</h2>
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Rupiah</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Dollar</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Yen</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">Rp25.000.000</td>
                                <td class="p-3 text-sm text-gray-700">200</td>
                                <td class="p-3 text-sm text-gray-700">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h2 class="text-soft-blue font-semibold mb-2">Total Community Fund</h2>
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Rupiah</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Dollar</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Yen</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">Rp25.000.000</td>
                                <td class="p-3 text-sm text-gray-700">200</td>
                                <td class="p-3 text-sm text-gray-700">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h2 class="text-soft-blue font-semibold mb-2">Total Zakat</h2>
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Rupiah</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Dollar</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Yen</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">Rp25.000.000</td>
                                <td class="p-3 text-sm text-gray-700">200</td>
                                <td class="p-3 text-sm text-gray-700">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h2 class="text-soft-blue font-semibold mb-2">Total Gift</h2>
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Rupiah</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Dollar</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Yen</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">Rp25.000.000</td>
                                <td class="p-3 text-sm text-gray-700">200</td>
                                <td class="p-3 text-sm text-gray-700">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h2 class="text-soft-blue font-semibold mb-2">Total Program Pendampingan</h2>
                <div class="w-full overflow-x-auto bg-white mb-10">
                    <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Rupiah</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Dollar</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Yen</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="hover:bg-gray-100">
                                <td class="p-3 text-sm text-gray-700">Rp25.000.000</td>
                                <td class="p-3 text-sm text-gray-700">200</td>
                                <td class="p-3 text-sm text-gray-700">0</td>
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
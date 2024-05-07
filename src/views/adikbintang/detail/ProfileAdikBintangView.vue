<template>
    <div class="w-full lg:w-4/5 absolute right-0 font-inter">
        <main id="main" class=" mt-20 p-5">
            <div class="bg-white w-full rounded pb-5">
                <div class="bg-gray-300 w-full flex justify-center rounded-t">
                    <div class="w-40 -mb-12 pt-5">
                        <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-full border-soft-blue border-8">
                    </div>
                </div>
                <div class="text-center mt-20">
                    <h2 class="font-bold text-3xl">Sakamoto</h2>
                    <span class="text-xl">15 Tahun</span>
                </div>
                
                <!-- Menu pada profile adik bintang -->
                <AdikBintagProfileMenu />
                
                <div class="px-10 mt-10">
                    <div class="mb-10">
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Tentang Mimpi dan Harapan Adik Bintang</h3>
                        <hr class="w-full my-1 bg-gray-200">
                        <p class="text-gray-600 font-opensans text-base">
                            Cita-cita saya menjadi perawat yang sukses dan baik. saya bercita-cita menjadi perawat karena saya pernah melihat seorang perawat di pukesmas yanng sedang mengobati orang yang sakit perawat itu sangat berani mengobati pasien yang sakit itu.
                        </p>
                    </div>
                    <div class="mb-10">
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Informasi Pribadi</h3>
                        <hr class="w-full my-1 bg-gray-200">
                        <div class="w-full mt-5">
                            <ul class="w-full grid grid-cols-2 md:grid-cols-3 gap-8">
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Nama Lengkap</span>
                                    <span>Sakamoto</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Nama Panggilan</span>
                                    <span>Moto</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Tempat dan Tanggal Lahir</span>
                                    <span>Sleman, 2 Desember 2010</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Jenis Kelamin</span>
                                    <span>Laki-laki</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Agama</span>
                                    <span>Islam</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Hobi</span>
                                    <span>Mancing</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Jumlah Saudara</span>
                                    <span>3</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Status Orang Tua</span>
                                    <span>Orang Tua Lengkap</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Pendidikan Saat Ini</span>
                                    <span>SMP</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Kelas</span>
                                    <span>8</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Sekolah</span>
                                    <span>SMP N 3 Godean</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mb-10">
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Informasi Orang Tua</h3>
                        <hr class="w-full my-1 bg-gray-200">
                        <div class="w-full mt-5">
                            <ul class="w-full grid grid-cols-2 md:grid-cols-3 gap-8">
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Nama Ayah</span>
                                    <span>Martadinata</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Nama Ibu</span>
                                    <span>Lyudmila</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Tanggal Lahir Ayah</span>
                                    <span>10 Desember 1985</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Tanggal Lahir Ibu</span>
                                    <span>11 Desember 1985</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Pekerjaan Ayah</span>
                                    <span>Pilot VKS</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Pekerjaan Ibu</span>
                                    <span>Anggota Spetsnaz</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Pendapatan Ayah</span>
                                    <span>Rp 3.000.000</span>
                                </li>
                                <li class="flex flex-col">
                                    <span class="font-semibold mb-1">Pendapatan Ibu</span>
                                    <span>Rp 2.000.000</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mb-10">
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Riwayat Pendidikan</h3>
                        <div class="w-full mt-5 border rounded">
                            <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                                <thead class="bg-gray-50 border-b-2 border-gray-200">
                                    <tr class="">
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">Jenjang</th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">Sekolah</th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">Tahun</th>
                                    </tr>
                                </thead>
                                <tbody class="">
                                    <tr class="hover:bg-gray-100">
                                        <td class="p-3 text-sm text-gray-700">TK</td>
                                        <td class="p-3 text-sm text-gray-700">TK ABA Gamping</td>
                                        <td class="p-3 text-sm text-gray-700">2014-2016</td>
                                    </tr>
                                    <tr class="bg-gray-100 hover:bg-gray-200">
                                        <td class="p-3 text-sm text-gray-700">SD</td>
                                        <td class="p-3 text-sm text-gray-700">SD Muhammadiyah Ambarketawang 3</td>
                                        <td class="p-3 text-sm text-gray-700">2016-2022</td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="p-3 text-sm text-gray-700">SMP</td>
                                        <td class="p-3 text-sm text-gray-700">SMP N 3 Godean</td>
                                        <td class="p-3 text-sm text-gray-700">2022-2025</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import AdikBintagProfileMenu from '../../../components/AdikBintangProfileMenu.vue'
</script>

<style lang="scss" scoped>

</style>
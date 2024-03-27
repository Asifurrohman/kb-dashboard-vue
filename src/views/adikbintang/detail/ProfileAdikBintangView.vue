<template>
    <div class="bg-white w-full rounded">
        <div class="bg-gray-300 w-full flex justify-center rounded-t">
            <div class="w-40 -mb-12 pt-5">
                <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-full border-soft-blue border-8">
            </div>
        </div>
        <div class="text-center mt-20">
            <h2 class="font-bold text-3xl">Sakamoto</h2>
            <span class="text-xl">15 Tahun</span>
        </div>
        <div class="mt-5 flex flex-row justify-center">
            <div class="inline-flex rounded-md shadow-sm mx-4 md:mx-0" role="group">
                <RouterLink to="/detail/profile-ab" class="px-4 py-2 text-sm font-medium text-white bg-soft-blue border border-gray-200 rounded-s-lg">
                    Profile Adik Bintang
                </RouterLink>
                <RouterLink to="/detail/catatan-interview-ab" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 hover:text-soft-blue">
                    Catatan Interview
                </RouterLink>
                <RouterLink to="/detail/catatan-homevisit-ab" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:text-soft-blue">
                    Catatan Home Visit
                </RouterLink>
                <RouterLink to="/detail/progress-report-ab" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:text-soft-blue">
                    Progress Report
                </RouterLink>
                
            </div>
        </div>

        <div class="px-10 mt-10">
            <div class="mb-10">
                <h3 class="text-gray-900 text-lg text-soft-blue font-semibold text-center">Tentang Mimpi dan Harapan Adik Bintang</h3>
                <hr class="w-full my-1 bg-gray-200">
                <p class="text-gray-600 font-opensans text-base">
                    Cita-cita saya menjadi perawat yang sukses dan baik. saya bercita-cita menjadi perawat karena saya pernah melihat seorang perawat di pukesmas yanng sedang mengobati orang yang sakit perawat itu sangat berani mengobati pasien yang sakit itu.
                </p>
            </div>
            <div class="mb-10">
                <h3 class="text-gray-900 text-lg text-soft-blue font-semibold text-center">Informasi Pribadi</h3>
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
                <h3 class="text-gray-900 text-lg text-soft-blue font-semibold text-center">Informasi Orang Tua</h3>
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
                <h3 class="text-gray-900 text-lg text-soft-blue font-semibold text-center">Riwayat Pendidikan</h3>
                <hr class="w-full my-1 bg-gray-200">
                <table class="w-full mt-5">
                    <thead>
                        <tr>
                            <th>Jenjang</th>
                            <th>Sekolah</th>
                            <th>Tahun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TK</td>
                            <td>TK ABA Gamping</td>
                            <td>2014-2016</td>
                        </tr>
                        <tr class="bg-gray-200">
                            <td>SD</td>
                            <td>SD Muhammadiyah Ambarketawang 3</td>
                            <td>2016-2022</td>
                        </tr>
                        <tr>
                            <td>SMP</td>
                            <td>SMP N 3 Godean</td>
                            <td>2022-2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
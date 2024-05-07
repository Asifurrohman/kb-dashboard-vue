<template>
    <div class="w-full lg:w-4/5 absolute right-0 font-inter">
        <main id="main" class=" mt-20 p-5">
            <div>
                <h1 class="text-3xl font-semibold">Profile Saya</h1>
                <hr class="w-full mt-1 mb-4 bg-gray-200 h-1 rounded">
                <div class="flex w-full">
                    <div class="w-2/5">
                        <img src="../../../public/img/shanon.jpg" alt="" class="w-full rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800">
                        <div class="w-full flex flex-col text-center">
                            
                            <RouterLink to="/profile-kakak-bintang/update-profile" class="w-full bg-slate-400 hover:bg-slate-500 text-white rounded mt-2 py-2">Edit Profile</RouterLink>
                            <RouterLink to="/profile-kakak-bintang/ubah-password" class="w-full bg-rose-600 hover:bg-rose-800 text-white rounded mt-2 py-2">Ubah Password</RouterLink>
                        </div>
                    </div>
                    <div class="ml-5 w-3/5">
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Informasi Pribadi</h3>
                        <hr class="w-full my-2 bg-gray-200">
                        <div class="w-full overflow-x-auto bg-white mb-10">
                            <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                                <tbody class="">
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Tanggal Terdaftar</td>
                                        <td class="p-3 text-gray-700 w-2/3">2 Mei 2018</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Nama Lengkap</td>
                                        <td class="p-3 text-gray-700 w-2/3">Michelangelo Donatelo Son of Ezio</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Jenis Kelamin</td>
                                        <td class="p-3 text-gray-700 w-2/3">Laki-Laki</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Agama</td>
                                        <td class="p-3 text-gray-700 w-2/3">Zoroaster</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Tempat Lahir</td>
                                        <td class="p-3 text-gray-700 w-2/3">Fiorentina</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Tanggal Lahir</td>
                                        <td class="p-3 text-gray-700 w-2/3">9 Mei 1990</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Email Utama</td>
                                        <td class="p-3 text-gray-700 w-2/3">michelangelo@gunmail.com</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Nomor HP</td>
                                        <td class="p-3 text-gray-700 w-2/3">+62904029192</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Media Komunikasi</td>
                                        <td class="p-3 text-gray-700 w-2/3">WhatsApp</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Kontak Utama</td>
                                        <td class="p-3 text-gray-700 w-2/3">-</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Pendidikan</td>
                                        <td class="p-3 text-gray-700 w-2/3">S1</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Detail Pendidikan</td>
                                        <td class="p-3 text-gray-700 w-2/3">S1 Astronomi</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Pekerjaan</td>
                                        <td class="p-3 text-gray-700 w-2/3">Agent KGB</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Detail Pekerjaan</td>
                                        <td class="p-3 text-gray-700 w-2/3">Anggota KGB cabang Trieste</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Alamat dan Lokasi</h3>
                        <hr class="w-full my-2 bg-gray-200">
                        <div class="w-full overflow-x-auto bg-white mb-10">
                            <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                                <tbody class="">
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Kota Asal</td>
                                        <td class="p-3 text-gray-700 w-2/3">Fiorentina</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Kewarganegaraan</td>
                                        <td class="p-3 text-gray-700 w-2/3">Italia</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Alamat Saat Ini</td>
                                        <td class="p-3 text-gray-700 w-2/3">Palermo, Sicilia, Italia</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Kota Saat Ini</td>
                                        <td class="p-3 text-gray-700 w-2/3">Palermo</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Negara Saat Ini</td>
                                        <td class="p-3 text-gray-700 w-2/3">Italia</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Informasi Donasi</h3>
                        <hr class="w-full my-2 bg-gray-200">
                        <div class="w-full overflow-x-auto bg-white mb-10">
                            <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                                <tbody class="">
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Interval Donasi</td>
                                        <td class="p-3 text-gray-700 w-2/3">Per 1 bulan</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Rekening Favorit</td>
                                        <td class="p-3 text-gray-700 w-2/3">-</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Mata Uang</td>
                                        <td class="p-3 text-gray-700 w-2/3">Rp (Rupiah)</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold w-1/3">Sekali Donasi</td>
                                        <td class="p-3 text-gray-700 w-2/3">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 class="text-lg text-soft-blue font-semibold text-center">Akun Media Sosial</h3>
                        <hr class="w-full my-2 bg-gray-200">
                        <div class="w-full overflow-x-auto bg-white mb-10">
                            <table class="w-full table table-fixed overflow-auto lg:overflow-hidden">
                                <tbody class="">
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold flex flex-row items-center">
                                            <span class="h-full mr-2"><ion-icon name="logo-facebook"></ion-icon></span>
                                            <span class="h-full">Facebook</span>
                                        </td>
                                        <td class="p-3 text-gray-700 w-2/3">Michelangelo Donatelo</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold flex flex-row items-center">
                                            <span class="mr-2"><ion-icon name="logo-linkedin"></ion-icon></span>
                                            <span>LinkedIn</span>
                                        </td>
                                        <td class="p-3 text-gray-700 w-2/3">Michelangelo Donatelo</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold flex flex-row items-center">
                                            <span class="mr-2"><ion-icon name="logo-instagram"></ion-icon></span>
                                            <span>Instagram</span>
                                        </td>
                                        <td class="p-3 text-gray-700 w-2/3">mas.angelo</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-3 text-gray-700 font-semibold flex flex-row items-center">
                                            <span class="mr-2"><ion-icon name="logo-twitter"></ion-icon></span>
                                            <span>X (Twitter)</span>
                                        </td>
                                        <td class="p-3 text-gray-700">Yoshino Abuser</td>
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

</script>

<style lang="scss" scoped>

</style>
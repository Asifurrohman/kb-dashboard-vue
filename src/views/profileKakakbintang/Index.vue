<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-28 p-5">
            <div class="w-full px-5 py-2.5 bg-hz-white rounded">
                <div class="flex">
                    <img src="../../../public/img/shanon.jpg" alt="" class="h-40 rounded-full object-cover">
                    <div class="flex flex-col justify-between ml-5">
                        <h2 class="text-xl font-semibold mb-2">
                            Mulyo Hartono
                        </h2>
                        <ul class="mb-2">
                            <li>Akuntan</li>
                            <li>mulyo@gmail.com</li>
                            <li>+6285875940894</li>
                        </ul>
                        <div>
                            <button class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">Update Foto</button>
                            <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Update Password</button>
                        </div>
                    </div>
                    <div class="border mx-10">
                    </div>
                    <div class="flex">
                        <div class="">
                            <ul class="">
                                <li>Tanggal Terdaftar:</li>
                                <li>Tempat, Tanggal Lahir:</li>
                                <li>Jenis Kelamin:</li>
                                <li>Pendidikan:</li>
                                <li>Detail Pendidikan:</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>2 Juli 2019</li>
                                <li>Madiun, 20 Juni 1989</li>
                                <li>Laki-Laki</li>
                                <li>S1</li>
                                <li>S1 Akuntansi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div>
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
            </div> -->
            
            <div>
                <h1>Data</h1>
                <pre>{{ data }}</pre>
            </div>
        </main>
    </div>
</template>

<script setup>

</script>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            data: null,
            error: null
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                // const response = await axios.post('https://web.hoshizora.org/kakakbintang/my-adik/get/', 'type=active&offset=0', {
                const response = await axios.post('https://web.hoshizora.org/kakakbintang/my-adik/get/', 'type=active&offset=0', {
                    headers: {
                        'Content-Type': 'text/plain',
                        'Cookie': 'hz_session=bb17fe3505bfe38b80812df7040b4b5f4f1a5834'
                    }
                });
                this.data = response.data;
            } catch (err) {
                this.error = err;
                console.error(err);
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
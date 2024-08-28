<template>
    <div class="my-2">
        <h1 class="text-2xl font-semibold mb-2">Lengkapi Profile Anda</h1>
        <p>
            Bantu kami melayani Anda lebih baik lagi. Informasi yang Anda berikan tidak akan dipublikasikan.
        </p>
    </div>
    <div>
        <form action="" enctype="multipart/form-data">
            <div class="my-4">
                <Heading2>Foto Profile</Heading2>
                <div class="bg-slate-100 border px-5 py-2.5 rounded flex flex-col items-center">
                    <img v-bind:src="image" class="w-40 h-40 object-cover p-1 rounded-full ring-2 ring-sky-500 mb-2" alt="">
                    <label for="userPhoto" class="cursor-pointer bg-lime-500 hover:bg-lime-700 hover:text-hz-white px-5 py-2.5 rounded  duration-75">Unggah Foto Profile</label>
                    <input type="file" id="userPhoto" accept=".jpeg, .jpg, .png, .svg" @change="fileChange" class="hidden">
                </div>
                <!-- <AvatarInput v-model="form.avatar"></AvatarInput> -->
            </div>
            <div class="my-4">
                <Heading2>Informasi Pribadi</Heading2>
                <div class="bg-slate-100 border px-5 py-2.5 rounded">
                    <div class="mb-5">
                        <label for="registerName" class="block mb-2 font-medium">Nama Lengkap</label>
                        <input type="text" id="registerName" class="bg-gray-50 border border-gray-300 rounded focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" required />
                    </div>
                    
                    <div class="mb-5">
                        <label for="registerBornDate" class="block mb-2 font-medium">Tanggal Lahir</label>
                        <div class="flex">
                            <label for="registerBornDate" class="cursor-pointer bg-slate-300 border-t-gray-300 border-r-gray-300 border-b-gray-300 p-2.5 rounded-l">
                                <i class="fa-regular fa-calendar"></i>
                            </label>
                            <input id="registerBornDate" datepicker datepicker-autohide type="text" class="cursor-pointer bg-gray-50 border border-gray-300 rounded-r focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="Pilih tanggal lahir anda">
                        </div>
                    </div>
                    
                    <div class="mb-5">
                        <label for="registerPhoneNumber" class="block mb-2 font-medium">Nomor HP Anda</label>
                        <div class="flex">
                            <select v-model="selectedPhoneCode" name="" id="regsiterPhoneNumber" class="bg-slate-300 border-gray-300 rounded-l focus:ring-sky-500 focus:border-sky-500 block p-2.5">
                                <option v-for="phoneCode in phoneCodes" v-bind:key="phoneCode" v-bind:value="phoneCode.code">
                                    <img src="https://flagsapi.com/BE/flat/64.png" alt="">
                                    {{ phoneCode.code }}
                                </option>
                            </select>
                            <input v-model="phoneNumber" type="number" id="registerName" class="bg-gray-50 border border-gray-300 rounded-r focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" required />
                        </div>
                        <div class="text-sm">
                            <span>Nomor HP Anda: </span><input type="text" class="bg-transparent border-transparent" disabled v-bind:value="selectedPhoneCode">
                        </div>
                    </div>
                    
                    <div class="mb-5">
                        <label for="registerGender" class="block mb-2 font-medium">Jenis Kelamin</label>
                        <select id="registerGender" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">
                            <option value="null" selected>Belum Diisi</option>
                            <option value="lakilaki">Laki - Laki</option>
                            <option value="perempuan">Perempuan</option>
                        </select>
                    </div>
                    
                    <div class="mb-5">
                        <label for="registerKBType" class="block mb-2 font-medium">Tipe Kakak Asuh</label>
                        <select id="registerKBType" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">
                            <option value="null" selected>Belum Diisi</option>
                            <option value="perusahaan">Perusahaan</option>
                            <option value="mitra">Mitra Organisasi</option>
                        </select>
                    </div>
                    
                    <div class="mb-5">
                        <label for="regsiterAddress" class="block mb-2 font-medium">Alamat Saat Ini</label>
                        <textarea id="registerAddres" rows="4" class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-sky-500 focus:border-sky-500"></textarea>
                    </div>
                    
                    <div class="mb-5">
                        <label for="registerCity" class="block mb-2 font-medium">Kota Saat Ini</label>
                        <input type="text" id="registerCity" class="bg-gray-50 border border-gray-300 rounded focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" required />
                    </div>
                </div>
            </div>
            
            <div class="my-4">
                <Heading2>Pendidikan Dan Pekerjaan</Heading2>
                <div class="bg-slate-100 border px-5 py-2.5 rounded">
                    <p class="mb-5">
                        Informasi berikut ini membantu kami dalam memilihkan adik asuh yang cocok untuk Anda.
                    </p>
                    <div class="mb-5">
                        <label for="registerEducation" class="block mb-2 font-medium">Pendidikan Terakhir</label>
                        <select name="registerEducation" id="registerEducation" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">
                            <option value="null" selected>Belum Diisi</option>
                            <option value="sd">SD</option>
                            <option value="smp">SMP</option>
                            <option value="sma">SMA/SMK</option>
                            <option value="s1">S1</option>
                            <option value="s2">S2</option>
                            <option value="s3">S3</option>
                            <option value="diploma">Diploma</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label for="registerJob" class="block mb-2 font-medium">Pekerjaan</label>
                        <select name="registerJob" id="registerJob" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5">
                            <option value="null" selected>Belum Diisi</option>
                            <option value="pns">PNS</option>
                            <option value="bumn">BUMN</option>
                            <option value="swasta">Swasta</option>
                            <option value="pelajar">Pelajar/Mahasiswa</option>
                            <option value="wiraswasta">Wiraswasta</option>
                            <option value="irt">Ibu Rumah Tangga</option>
                            <option value="others">Lainnya</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div class="my-4">
                <Heading2>Informasi Tambahan</Heading2>
                <div class="bg-slate-100 border px-5 py-2.5 rounded">
                    <p class="font-semibold mb-5">
                        Dari Mana Kamu Mengetahui Hoshizora?
                    </p>
                    <div class="mb-5">
                        <input id="checkboxInputTeman" type="checkbox" value="true" v-model="showInputTeman" class="w-4 h-4 text-sky-500 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 focus:ring-2">
                        <label for="checkboxInputTeman" class="ms-2 font-medium text-gray-900">Teman</label>
                        <input type="text" v-if="showInputTeman" id="registerName" class="bg-gray-50 border border-gray-300 rounded mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="Siapa namanya?" />
                    </div>
                    <div class="mb-5">
                        <input id="checkboxInputWebsite" type="checkbox" value="true" v-model="showInputWebsite" class="w-4 h-4 text-sky-500 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 focus:ring-2">
                        <label for="checkboxInputWebsite" class="ms-2 font-medium text-gray-900">Website</label>
                        <input type="text" v-if="showInputWebsite" id="registerName" class="bg-gray-50 border border-gray-300 rounded mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5" placeholder="Sebutkan Websitenya" />
                    </div>
                </div>
            </div>

            <div class="w-full">
                <button type="submit" class="bg-hz-blue hover:bg-sky-500 duration-75 text-hz-white w-full py-2.5 rounded">
                    Simpan dan Lanjut
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import Heading2 from '../../components/Heading2.vue'
import AvatarInput from '../../components/AvatarInput.vue'

const selectedPhoneCode = ref('+62')
const phoneCodes = ref([
{ code: '+1', flagUrl: 'https://flagsapi.com/BE/flat/64.png' },
{ code: '+61', flagUrl: 'https://flagsapi.com/BE/flat/64.png' },
{ code: '+62', flagUrl: 'https://flagsapi.com/BE/flat/64.png' },
{ code: '+81', flagUrl: 'https://flagsapi.com/BE/flat/64.png' },
])
</script>

<script>
export default {
    data(){
        return{
            // form: {
            //     avatar: null
            // }
            image: "../../../public/img/user.png",
            phoneNumber: "",
            showInputTeman: false,
            showInputWebsite: false,
        }
    },
    methods: {
        fileChange(event){
            const file = event.target.files[0]
            this.image = URL.createObjectURL(file)
        },
        showInputTemanToggle(){
            this.showInputTeman != this.showInputTeman
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
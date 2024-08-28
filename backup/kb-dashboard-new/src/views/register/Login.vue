<template>
    <div class="w-screen h-screen fixed bg-cover bg-no-repeat bg-custom">
        <div class="w-full md:w-3/5 mx-auto px-10 md:px-0 my-64 md:my-20 sm:text-center">
            <img src="../../../public/img/logo-hz.png" alt="" class="w-80 mt-0 md:-mt-12 md:mb-48 lg:mb-54 sm:mx-auto">
            <div class="text-hz-white my-10">
                <h1 class="font-semibold text-xl md:text-2xl lg:text-4xl">
                    Selamat Datang Di Hoshizora Foundation!
                </h1>
                <p class="my-2 md:text-lg lg:text-xl">
                    Lebih dari 1921 adik asuh melanjutkan sekolah melalui beasiswa Hoshizora. Anda dapat menjadi bagian dari program ini. Bergabunglah!
                </p>
            </div>
            <div class="flex flex-row md:flex-col items-center">
                <button type="button" @click="toggleLoginModal" class="w-4/5 md:w-3/5 lg:w-2/5 text-hz-white bg-hz-blue border border-hz-blue hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 rounded text px-5 py-2.5 me-2 mb-2">
                    Login
                </button>
                <button type="button" @click="toggleRegisterModal" class="w-4/5 md:w-3/5 lg:w-2/5 py-2.5 px-5 me-2 mb-2 font-medium text-hz-blue focus:outline-none bg-hz-white rounded border border-gray-200 hover:bg-gray-100 hover:text-sky-500 focus:z-10 focus:ring-4 focus:ring-gray-100">
                    Daftar
                </button>
            </div>
        </div>
    </div>
    
    
    <!-- Modal untuk login -->
    <Teleport to="#modal">
        <Popup v-if="showLoginModal" @close="toggleLoginModal" modalTitle="Masuk sebagai Kakak Bintang">
            <form action="">
                <div class="mb-5">
                    <label for="loginEmail" class="block mb-2 font-medium">Email</label>
                    <input type="email" id="loginEmail" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-hz-blue focus:border-hz-blue block w-full p-2.5" placeholder="kakakbintang@email.com" required />
                </div>
                <div class="mb-5">
                    <label for="loginPassword" class="block mb-2 font-medium">Password</label>
                    <input type="password" id="loginPassword" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-hz-blue focus:border-hz-blue block w-full p-2.5" required />
                </div>
                <div class="relative z-0 -mt-4 mb-10 group">
                    <a href="#" class="text-sm text-orange-500 font-semibold hover:text-orange-700">
                        Lupa password anda?
                    </a>
                </div>
                <div class="relative z-0 mb-5 group flex flex-col w-full">
                    <button type="button" class="text-hz-white bg-hz-blue hover:bg-sky-500 border border-hz-blue focus:ring-4 focus:outline-none focus:ring-sky-100 font-medium rounded px-5 py-2.5 text-center items-center me-2 mb-2">
                        Login
                    </button>
                    <div class="-mt-2 py-2 text-center">
                        <span class="">atau</span>
                    </div>
                    <a href="#" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded px-5 py-2.5 flex justify-center items-center me-2 mb-2">
                        <span class="mr-2">
                            <img src="../../../public/img/logo-google.png" alt="" class="w-5">
                        </span>
                        <span>
                            Login menggunakan Google
                        </span>
                    </a>
                </div>
            </form>
        </Popup>
    </Teleport>
    
    
    <!-- Modal untuk register -->
    <Teleport to="#modal">
        <Popup v-if="showRegisterModal" @close="toggleRegisterModal" modalTitle="Daftar menjadi Kakak Bintang">
            <form action="">
                <div class="mb-5">
                    <label for="registerName" class="block mb-2  font-medium">Nama Lengkap</label>
                    <input type="text" id="registerName" class="bg-gray-50 border border-gray-300 rounded focus:ring-hz-blue focus:border-hz-blue block w-full p-2.5" required />
                </div>
                <div class="mb-5">
                    <label for="registerEmail" class="block mb-2  font-medium">Email</label>
                    <input type="email" id="registerEmail" class="bg-gray-50 border border-gray-300 rounded focus:ring-hz-blue focus:border-hz-blue block w-full p-2.5" placeholder="kakakbintang@email.com" required />
                </div>
                <!-- <label for="registerPhone" class="block mb-2  font-medium">Nomor Telepon Anda</label> -->
                <!-- <div class="flex items-center mb-5">
                    <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4  font-medium text-center bg-gray-100 border border-gray-300 rounded-s hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">
                        <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                        +1 <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                    </button>
                    <div id="dropdown-phone" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
                        <ul class="py-2  text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2  text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                    <span class="inline-flex items-center">
                                        <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                                        United States (+1)
                                    </span>
                                </button>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="relative w-full">
                        <input type="number" id="registerPhone" class="block p-2.5 w-full z-20  bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-hz-blue focus:border-hz-blue dark:focus:border-hz-blue" required />
                    </div>
                </div> -->
                <div class="mb-5">
                    <label for="registerPhone" class="block mb-2  font-medium">Nomor Telepon Anda</label>
                    <input type="text" id="registerPhone" class="bg-gray-50 border border-gray-300 rounded focus:ring-hz-blue focus:border-hz-blue block w-full p-2.5" placeholder="example: +62867867867" required />
                </div>
                <div class="mb-5">
                    <label for="registerPassword" class="block mb-2  font-medium">Password</label>
                    <input type="password" id="registerPassword" class="bg-gray-50 border border-gray-300 rounded focus:ring-hz-blue focus:border-hz-blue block w-full p-2.5" required />
                </div>
                <div class="mb-5">
                    <label for="registerRepeatedPassword" class="block mb-2  font-medium">Ulangi Password</label>
                    <input type="password" id="registerRepeatedPassword" class="bg-gray-50 border border-gray-300 rounded focus:ring-hz-blue focus:border-hz-blue block w-full p-2.5" required />
                </div>
                <div>
                    <span class="font-semibold">Syarat dan Ketentuan</span>
                    <div class="flex items-start mt-1 mb-4">
                        <input id="agreement1" type="checkbox" value="" class="w-4 h-4 mt-1 text-hz-blue bg-gray-100 border-gray-300 rounded focus:ring-hz-blue">
                        <label for="agreement1" class="ms-2">
                            Saya setuju bahwa saya akan terikat dengan program ini untuk paling tidak dalam jangka 1 periode donasi Hoshizora.
                        </label>
                    </div>
                    <div class="flex items-start mb-4">
                        <input id="agreement2" type="checkbox" value="" class="w-4 h-4 mt-1 text-hz-blue bg-gray-100 border-gray-300 rounded focus:ring-hz-blue">
                        <label for="agreement2" class="ms-2">
                            Saya setuju untuk memberikan donasi kepada Adik Bintang dengan donasi minimal berdasarkan dengan jenjang Adik Bintang dengan ketentuan sebagai berikut:
                            <ul class="mt-2 space-y-1 list-disc flex flex-col items-center">
                                <li class="w-4/5">
                                    Adik Bintang SD : minimal per bulan IDR 100K/USD 7/JPY 800
                                </li>
                                <li class="w-4/5">
                                    Adik Bintang SMP : minimal per bulan IDR 150K/USD 10.5/JPY 1200
                                </li>
                                <li class="w-4/5">
                                    Adik Bintang SMA : minimal per bulan IDR 200K/USD 14/JPY 1600
                                </li>
                            </ul>
                        </label>
                    </div>
                    <div class="text-sm mb-10">
                        *Dengan mengeklik Mendaftar, anda menyetujui ketentuan Hak dan Kewajiban sebagai Kakak Bintang
                    </div>
                </div>
                <div class="relative z-0 mb-5 group flex flex-col w-full">
                    <button type="button" class="text-hz-white bg-hz-blue hover:bg-sky-500 border border-hz-blue focus:ring-4 focus:outline-none focus:ring-sky-100 font-medium rounded px-5 py-2.5 text-center items-center me-2 mb-2">
                        Daftar
                    </button>
                    <div class="-mt-2 py-2 text-center">
                        <span class="">atau</span>
                    </div>
                    <a href="#" class=" bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded px-5 py-2.5 flex justify-center items-center me-2 mb-2">
                        <span class="mr-2">
                            <img src="../../../public/img/logo-google.png" alt="" class="w-5">
                        </span>
                        <span>
                            Daftar menggunakan Google
                        </span>
                    </a>
                </div>
            </form>
        </Popup>
    </Teleport>
</template>

<script setup>
import Popup from '@/components/LoginPopup.vue'
</script>

<script>
export default {
    data(){
        return{
            showLoginModal: false,
            showRegisterModal: false
        }
    },
    
    methods:{
        toggleLoginModal(){
            this.showLoginModal = !this.showLoginModal
        },
        toggleRegisterModal(){
            this.showRegisterModal = !this.showRegisterModal
        }
    }
}
</script>

<style scoped>
.bg-custom{
    background-image: linear-gradient(180deg, rgba(42,82,149,0.7) 0%, rgba(18,40,77,1) 100%) ,url('../../../public/img/login-bg.png');
}

@media screen and (max-width: 640px) {
    .bg-custom{
        background-image: linear-gradient(180deg, rgba(42,82,149,0.5) 0%, rgba(18,40,77,1) 100%) ,url('../../../public/img/login-bg.png');
    }
}
</style>
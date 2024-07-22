<template>
    <div class="w-screen h-screen">
        <div class="bg-cover bg-no-repeat fixed w-full" style="background-image: linear-gradient(to bottom, rgba(42, 82, 149, 0.5), rgba(18, 40, 77, 1)) ,url('../../../public/img/login-bg.png'); height: 100vh">
            <div class="flex flex-col items-center py-5">
                <div class="">
                    <a href="#" class="bg-pink-500">
                        <img src="../../../public/img/logo-hz.png" alt="" class="w-[300px]">
                    </a>
                </div>
                <div class="text-center mt-[240px]">
                    <h1 class="font-semibold text-hz-white text-2xl">Selamat Datang Di Hoshizora Foundation!</h1>
                    <p class="text-hz-white text-base mt-5">
                        Lebih dari 1921 adik asuh melanjutkan sekolah melalui beasiswa Hoshizora. <br> Anda dapat menjadi bagian dari program ini. Bergabunglah!
                    </p>
                </div>
                <div class="mt-5 flex flex-col gap-4">
                    <button id="openLoginKB" @click="toggleLoginModal()" class="px-[36px] py-[12px] bg-[#0089B5] hover:bg-soft-blue text-white rounded">
                        Login Kakak Bintang
                    </button>
                    <button id="openDaftarKB" @click="toggleRegisterModal()" class="px-[36px] py-[12px] border border-slate-400 text-hz-white duration-150 hover:border-soft-blue hover:bg-hz-white hover:text-dark-grey rounded">
                        Daftar Kakak Bintang
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Modal Register -->
        <div v-if="showRegisterModal">
            <ModalLoginRegister>
                <div class="flex flex-col items-center justify-between bg-white p-10 rounded relative">
                    <button @click="toggleRegisterModal()" class="absolute top-0 right-0 mr-4 mt-4 text-slate-400 hover:text-red-700">
                        <ion-icon name="close" size="large"></ion-icon>
                    </button>
                    <h2 class="font-semibold text-gray-700 text-xl mb-5">
                        Daftar Menjadi Kakak Bintang
                    </h2>
                    
                    <form class="w-full">
                        <div class="relative z-0 w-full md:min-w-96 mb-5 group">
                            <input type="text" name="fullname" id="registerFullname" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                            <label for="fullname" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap Anda</label>
                        </div>
                        <div class="relative z-0 w-full md:min-w-96 mb-5 group">
                            <input type="number" name="phoneNumber" id="registerPhoneNumber" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                            <label for="phoneNumber" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomor Telepon Anda</label>
                        </div>
                        <div class="relative z-0 w-full md:min-w-96 mb-5 group">
                            <input type="email" name="email" id="registerEmail" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                            <label for="email" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat Email Anda</label>
                        </div>
                        <div class="relative z-0 w-full md:min-w-96 mb-5 group">
                            <input type="password" name="password1" id="registerPassword1" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                            <label for="password1" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div class="relative z-0 w-full md:min-w-96 mb-5 group">
                            <input type="password" name="password2" id="registerPassword2" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                            <label for="password2" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ulangi Password</label>
                        </div>
                        <div>
                            <h4 class="font-semibold">Syarat dan Ketentuan</h4>
                        </div>
                        <div class="mt-5 max-w-96 flex items-start">
                            <input type="checkbox" id="setujuPeriode" name="setujuPeriode" class="mr-2">
                            <label for="setujuPeriode" class="text-sm text-slate-700">
                                Saya setuju bahwa saya akan terikat dengan program ini untuk paling tidak dalam jangka 1 periode donasi Hoshizora.
                            </label>
                        </div>
                        <div class="mt-5 max-w-96 flex items-start">
                            <input type="checkbox" id="setujuDonasi" name="setujuDonasi" class="mr-2">
                            <label for="setujuDonasi" class="text-sm text-slate-700">
                                Saya setuju untuk memberikan donasi kepada Adik Bintang dengan donasi minimal berdasarkan dengan jenjang Adik Bintang dengan ketentuan sebagai berikut:
                            </label>
                        </div>
                        <div class="mt-5">
                            <ul class="text-sm text-slate-700 ml-5 list-disc">
                                <li class="mb-1">Adik Bintang <strong>SD</strong> : minimal per bulan IDR 100K/USD 7/JPY 800</li>
                                <li class="mb-1">Adik Bintang <strong>SMP</strong> : minimal per bulan IDR 150K/USD 10.5/JPY 1200</li>
                                <li class="mb-1">Adik Bintang <strong>SMA</strong> : minimal per bulan IDR 200K/USD 14/JPY 1600</li>
                            </ul>
                        </div>
                        
                        <button type="submit" class="text-hz-white bg-hz-green hover:bg-green-700 duration-150 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded w-full px-5 py-2.5 text-center mt-10">
                            Daftar
                        </button>
                    </form>
                    <span class="w-full py-2 text-center">
                        atau
                    </span>
                    <div class="w-full">
                        <button type="button" class="w-full text-[#4285F4] text-center border border-[#4285F4] hover:bg-[#4285F4]/90 hover:text-hz-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-2.5 inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                            </svg>
                            <span>
                                Daftar menggunakan Google
                            </span>
                        </button>
                    </div>
                    
                </div>
            </ModalLoginRegister>
        </div>
        
        <!-- Modal Login -->
        <div v-if="showLoginModal">
            <ModalLoginRegister>
                <div class="flex flex-col items-center justify-between bg-white p-10 rounded relative">
                    <button @click="toggleLoginModal()" class="absolute top-0 right-0 mr-4 mt-4 text-slate-400 hover:text-red-700">
                        <ion-icon name="close" size="large"></ion-icon>
                    </button>
                    <h2 class="font-semibold text-dark-grey text-xl mb-5">
                        Login Sebagai Kakak Bintang
                    </h2>
                    
                    <form class="w-full">
                        <div class="relative z-0 w-full min-w-48 md:min-w-96 mb-5 group">
                            <input type="email" name="email" id="loginEmail" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                            <label for="email" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat Email Anda</label>
                        </div>
                        <div class="relative z-0 w-full min-w-48 md:min-w-96 mb-1 group">
                            <input type="password" name="password" id="loginPassword" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                            <label for="password" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div class="relative z-0 w-full min-w-48 md:min-w-96 mb-5 group">
                            <a href="#" class="text-sm font-semibold text-blue-800">Lupa password anda?</a>
                        </div>
                        
                        <button type="submit" class="text-hz-white bg-hz-green hover:bg-green-700 duration-150 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded w-full px-5 py-2.5 text-center mt-10">
                            Login
                        </button>
                    </form>
                    <span class="w-full py-2 text-center">
                        atau
                    </span>
                    <div class="w-full">
                        <button type="button" class="w-full text-[#4285F4] text-center border border-[#4285F4] hover:bg-[#4285F4]/90 hover:text-hz-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-2.5 inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                            </svg>
                            <span>
                                Daftar menggunakan Google
                            </span>
                        </button>
                    </div>
                </div>
            </ModalLoginRegister>
        </div>
    </div>
    
</template>

<script setup>
import ModalLoginRegister from '../../components/ModalLoginRegister.vue'
</script>

<script>
export default {
    data() {
        return {
            showLoginModal: false,
            showRegisterModal: false,
        }
    },
    
    methods: {
        toggleLoginModal() {
            this.showLoginModal = !this.showLoginModal
        },
        toggleRegisterModal() {
            this.showRegisterModal = !this.showRegisterModal
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
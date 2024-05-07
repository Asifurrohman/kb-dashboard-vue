<template>
    <div class="w-screen h-screen">
        <div class="overflow-hidden bg-cover bg-no-repeat" style="background-image: linear-gradient(to bottom, rgba(42, 82, 149, 0.5), rgba(18, 40, 77, 1)) ,url('../../../public/img/login-bg.png'); height: 100vh">
            <div class="flex flex-col items-center py-5">
                <div class="">
                    <a href="#" class="bg-pink-500">
                        <img src="../../../public/img/logo-hz.png" alt="" class="w-[300px]">
                    </a>
                </div>
                <div class="text-center mt-[240px]">
                    <h1 class="font-semibold text-white text-2xl">Selamat Datang Di Hoshizora Foundation!</h1>
                    <p class="text-white text-base mt-5">
                        Lebih dari 1921 adik asuh melanjutkan sekolah melalui beasiswa Hoshizora. <br> Anda dapat menjadi bagian dari program ini. Bergabunglah!
                    </p>
                </div>
                <div class="mt-5 flex flex-col gap-4">
                    <button id="openLoginKB" class="px-[36px] py-[12px] bg-[#0089B5] hover:bg-soft-blue text-white rounded">
                        Login Kakak Bintang
                    </button>
                    <button id="openDaftarKB" class="px-[36px] py-[12px] border border-slate-400 hover:border-soft-blue hover:bg-soft-blue text-white rounded">
                        Daftar Kakak Bintang
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal Login -->
    <div id="loginModal" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-75 transition-all">
            <!-- ini modal formnya -->
            <div class="flex flex-col items-center justify-between bg-white p-10 rounded relative my-10">
                <button class="absolute top-0 right-0 mr-4 mt-4 text-slate-400 hover:text-red-700">
                    <ion-icon name="close" size="large"></ion-icon>
                </button>
                <h2 class="font-semibold text-gray-700 text-xl mb-5">
                    Masuk Sebagai Kakak Bintang
                </h2>

                <form action="#">
                    <div class="flex flex-col mb-5">
                        <label for="email" class="font-semibold mb-1">Email</label>
                        <input type="email" name="email" id="email" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-5">
                        <label for="password" class="font-semibold mb-1">Password</label>
                        <input type="password" name="password" id="password" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="w-96 flex flex-col mt-20">
                        <button class="py-2 bg-[#0089B5] hover:bg-soft-blue text-white rounded">
                            Login
                        </button>
                        <span class="mt-2 mx-auto">atau</span>
                        <button class="py-2 border border-slate-400 hover:border-soft-blue hover:bg-soft-blue hover:text-white text-slate-700 rounded mt-2">
                            Masuk Menggunakan Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Modal Daftar -->
    <div id="daftarModal" class="fixed z-10 inset-0 overflow-y-auto hidden">
        <div class="flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-75 transition-all">
            <!-- ini modal formnya -->
            <div class="flex flex-col items-center justify-between bg-white p-10 rounded relative my-10">
                <button class="absolute top-0 right-0 mr-4 mt-4 text-slate-400 hover:text-red-700">
                    <ion-icon name="close" size="large"></ion-icon>
                </button>
                <h2 class="font-semibold text-gray-700 text-xl mb-5">
                    Daftar Menjadi Kakak Bintang
                </h2>

                <form action="#">
                    <div class="flex flex-col mb-5">
                        <label for="nama" class="font-semibold mb-1">Nama Lengkap</label>
                        <input type="text" name="nama" id="nama" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-5">
                        <label for="noTelp" class="font-semibold mb-1">Nomor Telepon</label>
                        <input type="number" name="noTelp" id="noTelp" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-5">
                        <label for="email" class="font-semibold mb-1">Email</label>
                        <input type="email" name="email" id="email" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-5">
                        <label for="password" class="font-semibold mb-1">Password</label>
                        <input type="password" name="password" id="password" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-5">
                        <label for="repeatPassword" class="font-semibold mb-1">Ulangi Password</label>
                        <input type="password" name="repeatPassword" id="repeatPassword" class="border border-slate-400 rounded p-2">
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
                    <div class="flex flex-col mt-20">
                        <button class="py-2 bg-[#0089B5] hover:bg-soft-blue text-white rounded">
                            Daftar Kakak Bintang
                        </button>
                        <span class="mt-2 mx-auto">atau</span>
                        <button class="py-2 border border-slate-400 hover:border-soft-blue hover:bg-soft-blue hover:text-white text-slate-700 rounded mt-2">
                            Daftar Menggunakan Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<!-- <script>
    let openLoginKB = document.getElementById('openLoginKB');
    let loginModal = document.getElementById('loginModal');
    
    openLoginKB.addEventListener("click", () => {
        loginModal.classList.remove("hidden");
    });
</script> -->

<style lang="scss" scoped>

</style>
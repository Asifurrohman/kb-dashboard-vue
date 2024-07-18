<template>
    <div class="w-screen h-screen fixed">
        <div class="bg-cover bg-no-repeat" style="background-image: linear-gradient(to bottom, rgba(42, 82, 149, 0.5), rgba(18, 40, 77, 1)) ,url('../../../public/img/login-bg.png'); height: 100vh">
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
                    <button id="openLoginKB" @click="toggleLoginModal(true)" class="px-[36px] py-[12px] bg-[#0089B5] hover:bg-soft-blue text-white rounded">
                        Login Kakak Bintang
                    </button>
                    <button id="openDaftarKB" @click="toggleRegisterModal(true)" class="px-[36px] py-[12px] border border-slate-400 text-hz-white duration-150 hover:border-soft-blue hover:bg-hz-white hover:text-dark-grey rounded">
                        Daftar Kakak Bintang
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Modal Register -->
        <ModalLoginRegister :class="!showRegisterModal ? 'hidden' : '' ">
            <div class="flex flex-col items-center justify-between bg-white p-10 rounded relative">
                <button @click="toggleRegisterModal(false)" class="absolute top-0 right-0 mr-4 mt-4 text-slate-400 hover:text-red-700">
                    <ion-icon name="close" size="large"></ion-icon>
                </button>
                <h2 class="font-semibold text-gray-700 text-xl mb-5">
                    Daftar Menjadi Kakak Bintang
                </h2>
                
                <form class="w-full">
                    <div class="relative z-0 w-full min-w-48 md:min-w-96 mb-5 group">
                        <input type="text" name="fullname" id="registerFullname" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                        <label for="fullname" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap Anda</label>
                    </div>
                    <div class="relative z-0 w-full min-w-48 md:min-w-96 mb-1 group">
                        <input type="tel" name="phoneNumber" id="registerPhoneNumber" class="block py-2.5 px-0 w-full text-sm text-dark-grey bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-hz-blue peer" placeholder="" required />
                        <label for="phoneNumber" class="font-medium absolute text-base text-dark-grey duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hz-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomor Telepon Anda</label>
                    </div>
                    <div class="flex items-center">
                        <button id="dropdown-phone-button" data-dropdown-toggle="dropdown-phone" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                            +1 <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
                        </button>
                        <div id="dropdown-phone" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button">
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <span class="inline-flex items-center">
                                            <svg fill="none" aria-hidden="true" class="h-4 w-4 me-2" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd"/><path fill="#46467F" d="M0 .5h8.4v6.533H0z"/><g filter="url(#filter0_d_343_121520)"><path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd" d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z" clip-rule="evenodd"/></g></g><defs><linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient><filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape"/></filter></defs></svg>
                                            United States (+1)
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <span class="inline-flex items-center">
                                            <svg class="h-4 w-4 me-2" fill="none" viewBox="0 0 20 15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clip-rule="evenodd"/><path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"/><path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd"/></g></svg>
                                            United Kingdom (+44)
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <label for="phone-input" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
                        <div class="relative w-full">
                            <input type="text" id="phone-input" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                        </div>
                    </div>
                    
                    <button type="submit" class="text-hz-white bg-hz-green hover:bg-green-700 duration-150 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded w-full px-5 py-2.5 text-center mb-2">
                        Login
                    </button>
                    <button type="button" class="w-full text-[#4285F4] text-center border border-[#4285F4] hover:bg-[#4285F4]/90 hover:text-hz-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-2.5 inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                        </svg>
                        <span>
                            Login menggunakan Google
                        </span>
                    </button>
                </form>
                
            </div>
        </ModalLoginRegister>
        
        <!-- <ModalLoginRegister :class="!showRegisterModal ? 'hidden' : '' ">
            <div class="flex flex-col items-center justify-between bg-white p-10 rounded relative">
                <button @click="toggleRegisterModal(false)" class="absolute top-0 right-0 mr-4 mt-4 text-slate-400 hover:text-red-700">
                    <ion-icon name="close" size="large"></ion-icon>
                </button>
                <h2 class="font-semibold text-gray-700 text-xl mb-5">
                    Daftar Menjadi Kakak Bintang
                </h2>
                
                <form action="#">
                    <div class="flex flex-col mb-4">
                        <label for="nama" class="font-semibold">Nama Lengkap</label>
                        <input type="text" name="nama" id="nama" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="noTelp" class="font-semibold">Nomor Telepon</label>
                        <input type="number" name="noTelp" id="noTelp" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="email" class="font-semibold">Email</label>
                        <input type="email" name="email" id="email" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="password" class="font-semibold">Password</label>
                        <input type="password" name="password" id="password" class="border border-slate-400 rounded p-2">
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="repeatPassword" class="font-semibold">Ulangi Password</label>
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
        </ModalLoginRegister> -->
        
        <!-- Modal Login -->
        <ModalLoginRegister :class="!showLoginModal ? 'hidden' : '' ">
            <div class="flex flex-col items-center justify-between bg-white p-10 rounded relative">
                <button @click="toggleLoginModal(false)" class="absolute top-0 right-0 mr-4 mt-4 text-slate-400 hover:text-red-700">
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
                    
                    <button type="submit" class="text-hz-white bg-hz-green hover:bg-green-700 duration-150 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded w-full px-5 py-2.5 text-center mt-10 mb-2">
                        Login
                    </button>
                    <button type="button" class="w-full text-[#4285F4] text-center border border-[#4285F4] hover:bg-[#4285F4]/90 hover:text-hz-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-2.5 inline-flex justify-center items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
                        </svg>
                        <span>
                            Login menggunakan Google
                        </span>
                    </button>
                </form>
            </div>
        </ModalLoginRegister>
    </div>

    <template>
  <fwb-button @click="showModal">
    Open modal
  </fwb-button>

  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        Terms of Service
      </div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
      </p>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="alternative">
          Decline
        </fwb-button>
        <fwb-button @click="closeModal" color="green">
          I accept
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
    
</template>

<script setup>
import ModalLoginRegister from '../../components/ModalLoginRegister.vue'
</script>

<script>
export default {
    data() {
        return {
            showLoginModal: false,
            showRegisterModal: false
        }
    },
    
    methods: {
        // closeLoginModal(value) {
        //     this.hideLoginModal = value
        // },
        // showLoginModal(value){
        //     this.showLoginModal = value
        // }
        toggleLoginModal(value) {
            this.showLoginModal = value
        },
        toggleRegisterModal(value) {
            this.showRegisterModal = value
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
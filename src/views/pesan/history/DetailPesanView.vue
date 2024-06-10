<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-20 p-5">
            <button class="flex flex-row border border-slate-400 px-4 py-2 rounded hover:bg-white duration-150">
                <span class="mr-2"><ion-icon name="chevron-back-outline"></ion-icon></span>
                <span>Kembali</span>
            </button>
            
            <div>
                <h2 class="text-2xl font-semibold mt-10">Salam Semangat</h2>
                <div class="flex gap-4 mt-5 bg-slate-100 rounded p-5 border">
                    <div>
                        <img src="../../../../public/img/shanon.jpg" alt="" class="w-16 h-16 object-cover rounded-full">
                    </div>
                    <div class="flex flex-col">
                        <div class="text-lg font-semibold">
                            Michelangelo
                        </div>
                        <div class="mt-5">
                            <p class="font-opensans">
                                Hai
                                Semangat Divisi Kakak Bintang ,
                                Terimakasih
                            </p>
                        </div>
                        <div class="mt-5">
                            <button>
                                <img src="../../../../public/img/nanamia.jpeg" alt="" class="w-40 h-40 object-cover rounded">
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-row-reverse gap-4 mt-5 bg-slate-100 rounded p-5 border">
                    <div>
                        <img src="../../../../public/img/acipu.jpeg" alt="" class="w-16 h-16 object-cover rounded-full">
                    </div>
                    <div class="flex flex-col items-end">
                        <div class="text-lg font-semibold">
                            Admin DKB
                        </div>
                        <div class="mt-5">
                            <p class="font-opensans">
                                Hai juga kak, semangat selalu!
                            </p>
                        </div>
                        <div class="mt-5">
                        </div>
                    </div>
                </div>
                
                <div class="mt-10">
                    <form action="" enctype="multipart/form-data">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Balas pesan</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:outline-soft-blue" placeholder="Tulis pesan balasanmu di sini..."></textarea>

                        <button class="bg-soft-green text-white px-4 py-2 rounded mt-3">
                            Kirim
                        </button>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
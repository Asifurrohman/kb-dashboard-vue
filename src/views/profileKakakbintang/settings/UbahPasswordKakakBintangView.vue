<template>
    <div class="w-full lg:w-4/5 absolute right-0 font-inter">
        <main id="main" class=" mt-20 p-5">
            <div>
                <h2 class="text-2xl font-semibold">Ubah Password</h2>
                <p class="text-gray-600 text-base mt-2 sm:w-4/5 mb-5 leading-7">
                    Untuk keamanan akun, gantilah password secara periodik. Usahakan menggunakan kombinasi angka dan huruf agar password sulit ditebak.
                </p>
                <div class="bg-white w-full">
                    <form action="" class="p-5">
                        <div class="w-full md:w-1/2 flex flex-col rounded mb-5">
                            <label for="passwordBaru" class="font-semibold mb-2">Password Baru</label>
                            <input type="password" id="passwordBaru" class="border-2 rounded p-2 focus:border-soft-blue">
                        </div>
                        <div class="w-full md:w-1/2 flex flex-col rounded">
                            <label for="konfirmasiPasswordBaru" class="font-semibold mb-2">Konfirmasi Password Baru</label>
                            <input type="password" id="konfirmasiPasswordBaru" class="border-2 rounded p-2 focus:border-soft-blue mb-5">
                        </div>
                        <input type="submit" class="bg-soft-green text-white px-5 py-2 rounded hover:bg-emerald-600">
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
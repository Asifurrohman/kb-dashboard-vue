<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class=" mt-28 p-5">

            <div class="mb-20 flex gap-4">
                <RouterLink to="/write-message">
                    <button class="bg-soft-green px-5 py-2 rounded text-white hover:bg-emerald-500">Tulis Pesan</button>
                </RouterLink>
                <a href="https://wa.me/+6285643555530" target="_blank" class="bg-soft-yellow px-5 py-2 rounded text-white hover:bg-yellow-500">Chat Kami</a>
            </div>
            
            <div>
                <h3 class="font-semibold mb-2">Riwayat Pesan</h3>
                <div>
                    <div class="py-2">
                        <a href="#" class="bg-white border border-slate-200 p-5 flex gap-20 rounded">
                            
                            <div>
                                <h4 class="text-sm">Saya - Hoshizora</h4>
                                <span class="text-sm text-gray-600">15 Januari 2020 04:10 WIB</span>
                            </div>
                            <div>
                                <div class="flex items-center gap-4">
                                    <h4 class="bg-sky-500 text-white px-4 py-1 rounded">Tanya</h4>
                                    <h4 class="font-semibold">Salam Semangat</h4>
                                </div>
                                <div class="mt-5">
                                    <p class="text-base">
                                        Hai Semangat Divisi Kakak Bintang
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="py-2">
                        <a href="#" class="bg-white border border-slate-200 p-5 flex gap-20 rounded">
                            
                            <div>
                                <h4 class="text-sm">Saya - Hoshizora</h4>
                                <span class="text-sm text-gray-600">15 Januari 2020 04:10 WIB</span>
                            </div>
                            <div>
                                <div class="flex items-center gap-4">
                                    <h4 class="bg-red-500 text-white px-4 py-1 rounded">Komplain</h4>
                                    <h4 class="font-semibold">Keluhan Masa</h4>
                                </div>
                                <div class="mt-5">
                                    <p class="text-base">
                                        Hai DKB, ICT error ya?
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="py-2">
                        <a href="#" class="bg-white border border-slate-200 p-5 flex gap-20 rounded">
                            <div>
                                <h4 class="text-sm">Saya - Hoshizora</h4>
                                <span class="text-sm text-gray-600">15 Januari 2020 04:10 WIB</span>
                            </div>
                            <div>
                                <div class="flex items-center gap-4">
                                    <h4 class="bg-yellow-500 text-white px-4 py-1 rounded">Usulan</h4>
                                    <h4 class="font-semibold">Usulan Masa</h4>
                                </div>
                                <div class="mt-5">
                                    <p class="text-base">
                                        Hai DKB, ada usulan nih dari saya
                                    </p>
                                </div>
                            </div>
                        </a>
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
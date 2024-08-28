<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class="mt-20 p-5">

            <BerandaLineSeparator>Community Fund</BerandaLineSeparator>
            
            <!-- <Submenu>
                <template>
                    <RouterLink to="/community-fund/description">
                        Community Fund
                    </RouterLink>
                </template>
            </Submenu> -->
            
            <div class="border border-soft-green bg-emerald-300 rounded p-5 mb-5">
                <h3 class="text-xl font-semibold mb-5">Terima Kasih telah Mendaftar</h3>
                <p>
                    Kami sedang memproses donasi anda, kami akan memberi kabar apabila donasi anda sudah kami terima.
                </p>
            </div>
            
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import Submenu from '@/components/Submenu.vue';
import BerandaLineSeparator from '@/components/BerandaLineSeparator.vue';
</script>

<style lang="scss" scoped>

</style>
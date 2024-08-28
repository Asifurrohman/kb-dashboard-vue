<template>
    <header class="max-w-screen h-16 bg-hz-blue sticky top-0">
        <div class="flex h-full justify-between items-center px-6 sm:px-10 md:px-20">
            <div class="">
                <img src="../../../public/img/logo-hz.png" class="w-52" alt="">
            </div>
            <nav class="flex items-center gap-1 md:gap-4">
                <div>
                    <button id="languageDropdown" data-dropdown-toggle="dropdown" class="text-white border border-transparent hover:bg-sky-500 hover:border-sky-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm p-1 text-center flex items-center gap-1" type="button">
                        <img src="https://flagsapi.com/ID/flat/24.png">
                        <i class="fa-solid fa-caret-down"></i>
                    </button>
                    
                    <!-- Dropdown menu -->
                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="languageDropdown">
                            <li>
                                <a href="#" class="flex items-center gap-2 px-4 py-2 hover:bg-sky-500 hover:text-hz-white">
                                    <span>
                                        <img src="https://flagsapi.com/ID/flat/24.png">
                                    </span>
                                    <span>
                                        Bahasa Indonesia
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center gap-2 px-4 py-2 hover:bg-sky-500 hover:text-hz-white">
                                    <span>
                                        <img src="https://flagsapi.com/GB/flat/24.png">
                                    </span>
                                    <span>
                                        English
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div>
                    <button type="button" class="text-hz-white ">
                        <span>
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </span>
                        <span>
                            Logout
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    </header>
    <main class="max-w-screen">
        <div class="bg-slate-200 md:hidden">
            <div class="px-6 sm:px-10 md:px-20 py-2.5">
                Langkah {{ currentRouteName }} / 3 
            </div>
        </div>
        <div class="w-full p-6 md:px-0 md:w-4/5 lg:w-3/5 container mx-auto">
            <router-view></router-view>
        </div>
    </main>
</template>

<script setup>

</script>

<script>

import OnboardingStepOne from './OnboardingStepOne.vue';
export default {
    data(){
        return{

        }
    },
    computed: {
        currentRouteName(){
            return this.$route.name;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
<template>

        <div class="w-full text-center mt-10">
            <button class="text-center bg-soft-green px-10 py-2 font-lg text-white rounded hover:bg-emerald-500">Pilih</button>
        </div>
        <div class="mt-5 flex flex-row justify-center">
            <div class="inline-flex rounded-md shadow-sm mx-4 md:mx-0" role="group">
                <RouterLink to="/tambah-adik-bintang/profile-ab" class="px-4 py-2 text-sm font-medium  border border-gray-200 rounded-s-lg" activeClass="text-white bg-soft-blue hover:text-white">
                    Profile Adik Bintang
                </RouterLink>
                <RouterLink to="/tambah-adik-bintang/profile-ab/catatan-interview-ab" class="px-4 py-2 text-sm font-medium  border-t border-b border-r border-gray-200 hover:text-soft-blue" activeClass="text-white bg-soft-blue hover:text-white">
                    Catatan Interview
                </RouterLink>
                <RouterLink to="/tambah-adik-bintang/profile-ab/catatan-homevisit-ab" class="px-4 py-2 text-sm font-medium  border-t border-b border-gray-200 hover:text-soft-blue" activeClass="text-white bg-soft-blue hover:text-white">
                    Catatan Home Visit
                </RouterLink>
                <RouterLink to="/tambah-adik-bintang/profile-ab/progress-report-ab" class="px-4 py-2 text-sm font-medium  border border-gray-200 rounded-e-lg hover:text-soft-blue" activeClass="text-white bg-soft-blue hover:text-white">
                    Progress Report
                </RouterLink>
            </div>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
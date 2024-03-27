<template>
    <div class="bg-white w-full rounded">
        <div class="bg-gray-300 w-full flex justify-center rounded-t">
            <div class="w-40 -mb-12 pt-5">
                <img src="../../../../public/img/sakamoto.jpg" alt="" class="h-40 w-full object-cover rounded-full border-soft-blue border-8">
            </div>
        </div>
        <div class="mt-20 flex flex-row justify-center">
            <div class="inline-flex rounded-md shadow-sm mx-4 md:mx-0" role="group">
                <RouterLink to="/detail/profile-ab" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-s border-gray-200 rounded-s-lg hover:text-soft-blue">
                    Profile Adik Bintang
                </RouterLink>
                <RouterLink to="/detail/catatan-interview-ab" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:text-soft-blue">
                    Catatan Interview
                </RouterLink>
                <RouterLink to="/detail/catatan-homevisit-ab" class="px-4 py-2 text-sm font-medium text-white bg-soft-blue border border-gray-200">
                    Catatan Home Visit
                </RouterLink>
                <RouterLink to="/detail/progress-report-ab" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:text-soft-blue">
                    Progress Report
                </RouterLink>
                
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
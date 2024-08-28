<template>
    <!-- <div id="default-modal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> -->
        <div class="bg-gray-900/50 w-screen h-screen fixed flex justify-center items-center overflow-y-auto"> 
            <div class="relative w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-2xl max-h-full px-4 py-10">
                <!-- Modal content -->
                <div class="relative bg-white rounded shadow">
                    <div class="px-10 py-4 flex justify-between rounded-t border-t-8 border-t-hz-blue">
                        <div></div>
                        <div class="text-xl font-semibold">
                            {{ modalTitle }}
                        </div>
                        <div>
                            <button type="button" @click="$emit('close')" class="hover:text-red-500 duration-75">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                    <hr>
                    <div class="px-10 py-8">
                        <slot></slot>
                        
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
    
    
</template>

<script setup>

</script>

<script>
export default {
    props: ['modalTitle']
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <input type="file" accept="image/*" class="hidden" ref="file" @change="change">
        <button @click="browse()">Browse</button>
    </div>
</template>

<script setup>

</script>

<script>
export default {
    props: {
        value: File
    },
    methods: {
        browse(){
            this.$refs.file.click()
        },
        change(event){
            this.$emit('update:modelValue', event.target.files[0])
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
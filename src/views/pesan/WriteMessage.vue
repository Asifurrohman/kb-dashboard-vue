<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class="mt-28 p-5 w-full">
            <form action="#" enctype="multipart/form-data" class="w-full">
                <div class="flex w-full mb-2">
                    <select name="tipe" id="">
                        <option value="question">Question</option>
                        <option value="complain">Complain</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                    <div>
                        <label for="subject" class="font-semibold mb-1">Subject</label>
                        <input type="text" name="subject" id="subject" class="border border-slate-400 rounded">
                    </div>
                </div>
                <div class="w-full">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button type="submit" class="bg-soft-green text-hz-white px-4 py-2 rounded">Submit</button>
                </div>
            </form>
        </main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
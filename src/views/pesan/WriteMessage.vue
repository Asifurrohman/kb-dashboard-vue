<template>
    <div class="w-full lg:w-4/5 absolute right-0 ">
        <main id="main" class="mt-28 p-5 w-full">
            <form action="#" enctype="multipart/form-data" class="w-full">
                <!-- <div class="flex w-full mb-2">
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
                </div> -->
                <div class="w-full flex gap-4 mb-4">
                    <div class="w-1/3">
                        <select name="tipe" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="question">Question</option>
                            <option value="complain">Complain</option>
                            <option value="suggestion">Suggestion</option>
                        </select>
                    </div>
                    <div class="w-2/3">
                        <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required />
                    </div>
                </div>
                <div class="w-full">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
            </form>
        </main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
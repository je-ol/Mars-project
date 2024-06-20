<template>
    <div>
        <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-full h-[90%] object-cover">
        <div id="add-comment" class="flex w-full h-[8%] bg-white rounded-md my-[0.5rem]">
            <div class="flex w-[80%]">
                <img src="https://static-00.iconduck.com/assets.00/user-avatar-icon-512x512-vufpcmdn.png" alt="" class="h-full max-h-[48px] aspect-square p-[0.25rem]">
                <input type="text" class="w-full outline-none text-right pr-2" placeholder="Write a comment...">
            </div>
            <button class="w-[20%] bg-blue-500 text-white m-1 rounded-md">COMMENT</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PhotoThumb',
    }
</script>
<template>
<div class="table_score min-h-[700px]  text-center flex flex-col justify-center items-center rounded">
    <div class="w-[70%] text-c_blue text-5xl font-bold p-[20px] border-[5px] bg-white border-c_gray rounded-[15px] hover:bg-c_gray hover:border-white hover:text-white ease-in-out duration-300" >
        <p>Bạn được {{ img.total_score }} điểm </p>
        <div class="text-3xl text-right mt-[5%]">
            <p v-if="img.total_score <= 500">Cùng thử lại nào!! </p>
            <p v-else-if="img.total_score <= 2000">Cố lên!! </p>
            <p v-else>Woww !! Giỏi quá!! </p>
        </div>
        
    </div>
    <div class="btn_white my-[3%]"
        @click="img.click_new_game()">
        <a href="./StartGame1.vue"></a><p>Trò chơi mới</p>
    </div>
    <div class="btn_white" @click="img.click_exit()">
        <RouterLink :to="{ path: '/'}">
            <p>Thoát</p>
        </RouterLink>
    </div>
    
</div>

</template>
<style scoped>
.table_score{
    padding-bottom: 2%;
    background-image: url("../assets/EndGame/bg_end_game.png");
    background-size: cover;
}
.item_title {
    border-right: 5px solid #9C9C9C;
}
</style>

<script setup>
import { ImgStore } from '../stories/clickImg';

const img = ImgStore();

</script>
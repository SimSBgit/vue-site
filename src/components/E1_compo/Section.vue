<template>
    <div id="SecContainer">
        <div class="secBox1">
            <!-- 배너 이미지 -->
            <div class="bannerBox">
                <img :src=banner2 alt="배너 이미지">
            </div>
            <!-- 공지사항 -->
            <Announcement></Announcement>
            <div></div>
            <div></div>
        </div>
        <div class="secBox2">
            <Slider></Slider>
        </div>
    </div>
</template>

<script setup>
import Slider from './Slider.vue';
import banner2 from '../../assets/banner2.webp'
import Announcement from './Announcement.vue';
import { ref } from "vue"

</script>

<style scoped>
#SecContainer {
    flex: 1 1 auto;
    min-width: 0;
    display: grid;
    grid-template-columns: 400px 1fr;
    height: calc(100vh - 340px);
}

/* 배너 CSS */
.secBox1 {
    display: grid;
    grid-template-rows: 15% 35% 35% 15%;
}

.bannerBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>
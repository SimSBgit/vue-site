<template>
    <div id="hContainer">
        <!-- 헤더 로고1 -->
        <div class="hBox1">
            <img :src="img_beach3" alt="img_beach3">
        </div>
        <!-- 헤더 Nav가 들어갈 영역 -->
        <div class="hBox2">
            <Nav></Nav>
        </div>
    </div>
</template>

<script setup>
import img_beach3 from '../../assets/img_beach3.jpg'
import Nav from './Nav.vue';
</script>

<style scoped>
#hContainer {
    flex: 0 0 200px;
    height: calc(100vh - 340px);
    background-color: aquamarine;
    display: grid;
    grid-template-rows: 120px 1fr;
}

.hBox1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hBox2 {
    background-color: white;
}
</style>
<template>
    <div id="footContainer">
        <div class="footBox1">
            <img :src="img_notebook" alt="img_notebook">
        </div>
        <div class="footBox2">
            <div class="upperBox">
                <ul>
                    <li :key="list.url" v-for="list in links"><a :href="list.url">{{ list.name }}</a></li>
                </ul>
            </div>
            <div class="underBox">
                <p>오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. 오늘은 8월 29일. 오늘의 날씨는 맑음. </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import img_notebook from '../../assets/img_notebook.jpg'

const links = ref([
    {name: "mdn", url: "https://developer.mozilla.org/ko/" },
    {name: "w3", url: "https://www.w3schools.com/" },
    {name: "react", url: "https://ko.react.dev/"},
    {name: "vue", url: "https://ko.vuejs.org/"},
    {name: "zustand", url: "https://zustand.docs.pmnd.rs/"},
    {name: "github", url: "https://github.com/"},
])

</script>

<style scoped>
#footContainer {
    display: grid;
    grid-template-columns: 200px 1fr;
}
.footBox2 {
    display: grid;
    grid-template-rows: 50% 50%;
}
.footBox1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.upperBox {
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 0 0 #c7c7c7; 
}
.upperBox ul {
    height: 100%;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px 150px 150px;
}
.upperBox ul li {
    display: flex;
    justify-content: center;
    align-items: center;
}
.upperBox ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: large;
}
.underBox p{
    text-align: left;
    padding: 18px;
    line-height: 17px;
}
</style>
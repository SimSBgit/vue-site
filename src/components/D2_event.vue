<template>
    <!-- 카운트 -->
    <img :src="img_moose" alt="물소 이미지" width="770" height="549">
    <p>{{ "Moose count : " + cnt }}</p>
    <button v-on:click="cnt++">증가 버튼 {{ cnt }}</button>
    <hr>

    <!-- 전구 On/Off -->
    <div>
        <div v-show="lightOn"></div>
        <img :src="lightOn ? pic_bulbon : pic_bulboff" alt="On">
    </div>
    <button v-on:click="lightOn = !lightOn">On/Off</button>
    <hr>

    <!-- 인풋 입력시 카운트 -->
    <div>
        <input type="text" @input="inpCount++" placeholder="입력하세요.">
        <p>{{ '인풋 입력 발생: ' + inpCount }}</p>
    </div>
    <hr>

    <!-- 마우스 무브시 색상값 변경 -->
    <div class="bg" @mousemove="colorVal = Math.floor(Math.random() * 360)"
        v-bind:style="{ backgroundColor: `hsl(${colorVal}, 60%, 60%)` }">
    </div>
    <p><span>배경색상: hsl(<strong>{{ colorVal }}</strong>)</span></p>
    <hr>

    <!-- for문과 클릭 이벤트를 이용한 이미지 변경 -->
    <div>
        <img id="eee" :src="imgUrl" alt="음식이미지">
        <ol>
            <li id="ddd" v-for="food in manyFoods" v-on:click="imgUrl = food.url">{{ food.name }}</li>
        </ol>
    </div>
    <hr>

    <!-- 아래는 그냥 만들어 본 것 -->

    <div>
        <img :src="toggle ? imgs[0].url : imgs[1].url" alt="On/Off">
    </div>
    <button v-on:click="change">코드 다르게 짠 전구</button>

    

</template>

<script setup>

import { ref } from 'vue';
import img_moose from '../assets/img_moose.jpg'
import pic_bulboff from '../assets/pic_bulboff.gif'
import pic_bulbon from '../assets/pic_bulbon.gif'

import img_burrito from '../assets/img_burrito.svg'
import img_salad from '../assets/img_salad.svg'
import img_cake from '../assets/img_cake.svg'
import img_soup from '../assets/img_soup.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'

const cnt = ref(0)
const lightOn = ref(true)

const inpCount = ref(0)

const colorVal = ref(50)

const manyFoods = ref([
    { name: 'Burrito', url: img_burrito },
    { name: 'Salad', url: img_salad },
    { name: 'Cake', url: img_cake },
    { name: 'Soup', url: img_soup },
    { name: 'Fish', url: img_fish },
    { name: 'Pizza', url: img_pizza },
    { name: 'Rice', url: img_rice }
]
)

const imgUrl = ref(img_burrito)

// 아래는 그냥 만들어본 것.

const imgs = ref([
    { name: "On", url: pic_bulbon },
    { name: "Off", url: pic_bulboff },
])

const toggle = ref(true)

function change() {
    toggle.value = !toggle.value
}

</script>

<style scoped>
.bg {
    width: 200px;
    height: 80px;
    background-color: aqua;
}

img {
    width: 100px;
    height: 100px;
}

#ddd:hover {
    cursor: pointer;
    background-color: rgb(224, 224, 224);
}

ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

#eee {
    float: right;
    width: 55%;
}
</style>
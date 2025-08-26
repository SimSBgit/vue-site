<template>
    <!-- <li v-for="item in items">
        {{ item }}
    </li> -->
    <li v-for="item in items">
        {{ item.message }}
    </li>
    <hr>

    <ol>
        <li v-for="x in manyFoods">{{ x }}</li>
    </ol>
    <!-- <li v-for="x in manyFoods">{{ x }}</li> -->
    <hr>

    <div>
        <img v-for="food in Foods" v-bind:src="food" alt="음식 이미지">
    </div>
    <hr>

    <div id="aaa">
        <figure v-for="y in goodFoods">
            <img v-bind:src="y.url" alt="음식 이미지들">
            <figcaption>{{ y.name }}</figcaption>
        </figure>
    </div>
    <hr>

    <div id="bbb" v-for="b in publicFoods" :key="b.name" >
        <img :src="b.src" alt="음식들">
        <li>{{ b.name }}</li>
    </div>
    <hr>

    <div>
        <p v-for="(x, index) in manyFoods" :key="index">
            {{ index }} : "{{ x }}" &nbsp;
        </p>
    </div>
    <hr>

    <ol>
        <li v-bind:style="{listStyle: liStlye}" v-for="(b, index) in publicFoods" >
            {{ index }} : "{{ b.name }}", url : {{ b.src }}</li>
    </ol>

</template>

<script setup>
import { ref } from 'vue';

import img_burrito from '../assets/img_burrito.svg'
import img_salad from '../assets/img_salad.svg'
import img_cake from '../assets/img_cake.svg'
import img_soup from '../assets/img_soup.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'

const items = ref([
    { message: 'Foo' },
    { message: 'Bar' },
    { message: 'Poo' },
])

const manyFoods = ref([
    'Burrito',
    'Salad',
    'Cake',
    'Soup',
    'Fish',
    'Pizza',
    'Rice',
])

const Foods = ref([
    img_burrito,
    img_salad,
    img_cake,
    img_soup,
    img_fish,
    img_pizza,
    img_rice
])

const goodFoods = ref([
    { name: 'Burrito', url: img_burrito },
    { name: 'Salad', url: img_salad },
    { name: 'Cake', url: img_cake },
    { name: 'Soup', url: img_soup },
    { name: 'Fish', url: img_fish },
    { name: 'Pizza', url: img_pizza },
    { name: 'Rice', url: img_rice }
]) 

const publicFoods = ref([
    { name: 'Burrito', src: '/images/img_burrito.svg' },
    { name: 'Salad', src: '/images/img_salad.svg' },
    { name: 'Cake', src: '/images/img_cake.svg' },
    { name: 'Soup', src: '/images/img_soup.svg' },
    { name: 'Fish', src: '/images/img_fish.svg' },
    { name: 'Pizza', src: '/images/img_pizza.svg' },
    { name: 'Rice', src: '/images/img_rice.svg' }
])

const liStlye = ref("none")
</script>

<style scoped>
img {
    width: 80px;
    height: 80px;
    padding: 10px;
}

figure {
    margin: 0;
    width: 100px;
    height: 100px;
}

div {
    display: flex;
    flex-wrap: wrap;
}
#bbb {
    display: inline-block;
}

</style>
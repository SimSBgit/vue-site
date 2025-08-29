<template>
    <div>
        <button :class="className" @click="gotoPage('d1')">D1 웹디자인기능사</button>
        <button :class="className" @click="gotoPage('e1')">E1 웹디자인기능사</button>
    </div>
    <sub>
        <RouterView />
    </sub>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const $router = useRouter()
const route = useRoute()

const gotoPage = (id) => {
    $router.push({ path: `/wd/${id}` })
}

const className = ref("btn")

</script>

<style scoped>
.btn {
    color: white;
    background-color: #95a5a6;
    padding: 15px;
    border-radius: 10px;
    margin: 5px;
    border: 2px transparent;
    font-size: medium;
}
.btn:hover {
    background-color: lightblue;
    cursor: pointer;
}
</style>
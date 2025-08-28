<template>
    <p>1. Show</p>
    <div v-show="showDiv">이 Div는 숨겨질 수 있고,
        그 값은 {{ showDiv }} 이다.
    </div>
    <hr>

    <p>2. Show vs If의 차이점</p>
    <div id="aaa" v-show="showDiv1">Show</div>
    <div id="aaa" v-if="showDiv1">If</div>
    <hr>

</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(true)
const showDiv1 = ref(true)
</script>

<style scoped>
div {
    background-color: beige;
}

#aaa {
    padding: 20px;
    margin: 10px;
    display: inline-block;
    font-weight: bold;
    border: solid black 1px;
}
</style>
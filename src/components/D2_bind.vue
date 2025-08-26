<template>
    <h2>1. v-bind 이미지</h2>
    <img v-bind:src="img_beach3" alt="img_beach3">
    <hr>

    <h2>2. v-bind 폰트 사이즈</h2>
    <div v-bind:style="{fontSize: size}" >Text Example</div>
    <hr>

    <h2>2-1. v-bind 폰트 사이즈</h2>
    <div v-bind:style="{fontSize: size2 + `px`}" >Text Example</div>
    <hr>

    <h2>2-2. v-bind 폰트 사이즈</h2>
    <div v-bind:style="{'fontSize': size3 + 'px'}" >Text Example</div>
    <hr>

    <h2>3. v-bind 배경색상</h2>
    <div v-bind:style="{backgroundColor: bgVal}" >이 곳의 배경색상은 : {{ bgVal }}</div>
    <hr>

    <h2>3-1. v-bind 배경색상</h2>
    <div v-bind:style="{backgroundColor: isImportant ? 'lightgray' : 'brown'}" >isImportant : {{ isImportant }}</div>
    <hr>
    
    <h2>4. v-bind 클래스</h2>
    <div v-bind:class="className" >클래스로 배경색상 변경 1</div>
    <hr>

    <h2>4-1. v-bind 클래스</h2>
    <div v-bind:class="{myClass: true}" >클래스로 배경색상 변경 2</div>
    <hr>

    <h2>4-2. v-bind 클래스</h2>
    <div v-bind:class="{myClass2: isImportant2}" >클래스로 배경색상 변경 3</div>

</template>

<script setup>
    import { ref } from 'vue';
    import img_beach3 from '../assets/img_beach3.jpg'

    const size = ref("30px")
    const size2 = ref(40)
    const size3 = ref(50)
    const bgVal = ref("lightblue")
    const isImportant = ref(true)
    const className = ref("impClass")
    const isImportant2 = ref(true)
</script>

<style scoped>
    .impClass {
        background-color: lightsalmon;
    }

    .myClass {
        background-color: lightseagreen;
    }

    .myClass2 {
        background-color: chartreuse;
    }
</style>
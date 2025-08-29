<template>
    <div :id="s2">

    </div>
</template>

<script setup>
import { ref } from 'vue';


const s2 = ref("s2Container")
</script>

<style scoped>

#s2Container {
        width: 100%;
        height: 200px;
        box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
        /* border-bottom: 1px solid black; */
    }
</style>
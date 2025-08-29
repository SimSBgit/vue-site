<template>
    <div :id="s1">

    </div>
</template>

<script setup>
import { ref } from 'vue';


const s1 = ref("s1Container")
</script>

<style scoped>

    #s1Container {
        width: 100%;
        height: 400px;
        box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
        /* border-bottom: 1px solid black; */
    }
</style>
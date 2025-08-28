<template>
    <div>
        <input type="text" @input="inpCount++" placeholder="입력하세요">
        <p>{{ +inpCount }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';


    const inpCount = ref(0)
</script>

<style scoped>

</style>
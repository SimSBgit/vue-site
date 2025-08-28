<template>
    <ol>
        <li v-for="x in manyFoods" >{{ x }}</li>
    </ol>
</template>

<script setup>
import { ref } from 'vue';

    const manyFoods = ref([
        'Burrito',
        'Salad',
        'Cake',
        'Soup',
        'Fish',
        'Pizza',
        'Rice'
      ]) 
</script>

<style scoped>

</style>
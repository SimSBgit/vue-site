<template>
  <ol>
    <li v-for="x in manyFoods" >{{ x }}</li>
  </ol>
</template>

<script setup>

    const manyFoods = [
        'Burrito',
        'Salad',
        'Cake',
        'Soup',
        'Fish',
        'Pizza',
        'Rice'
      ]
</script>

<style scoped>

</style>
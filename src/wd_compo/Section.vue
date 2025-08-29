<template>
    <div id="Scontainer">
        <Sbox1></Sbox1>
        <Sbox2></Sbox2>
        <Sbox3></Sbox3>
    </div>
</template>

<script setup>
import Sbox1 from './Sbox1.vue'
import Sbox2 from './Sbox2.vue'
import Sbox3 from './Sbox3.vue'

</script>

<style scoped>
    #Scontainer {
        display: flex;
        width: 100%;
        height: 850px;
        flex-direction: column;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
    }
</style>
<template>
    <div id="hContainer">
        <div class="hBox1">

        </div>
        <div class="hBox2">
             <!-- <Nav></Nav> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Nav from '../wd_compo/Nav.vue';

</script>

<style scoped>
#hContainer {
    margin-top: 11px;
    height: 850px;
    width: 200px;
    display: flex;
    flex-direction: column;
    border: none;
}

.hBox1 {
    width: 200px;
    flex: 1 1 150px;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
}

.hBox2 {
    width: 200px;
    flex: 1 1 700px;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
}
</style>
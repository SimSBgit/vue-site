<template>
    <div :id="footer">
        <div :class="footLeftBox"></div>
        <div :id="footRightBox">
            <div :class="footBox[0]"></div>
            <div :class="footBox[1]"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const footer = ref("footContainer")
const footRightBox = ref("fContainer")
const footBox = ref(['footBox2', 'footBox3'])
const footLeftBox = ref("footBox1")

</script>

<style scoped>

#footContainer {
    width: 100%;
    height: 100px;
    margin: 0;
    padding: 0;
    display: flex;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
}

#footRightBox {
    height: 100px;
    display: flex;
}

.footBox1 {
    height: 100px;
    flex: 0 0 200px;
    box-shadow: 1px 0 0 0 rgba(0,0,0,0.1);
}
.footBox2 {
    height: 100px;
    width: 75%;
}
.footbox3 {
    height: 100px;
    width: 25%;
}
</style>
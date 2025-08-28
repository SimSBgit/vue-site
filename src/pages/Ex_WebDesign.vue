<template>
    <div>
        <button @click="gotoPage('a1')">A1 웹디자인기능사</button>
        <button @click="gotoPage('b2')">B2 웹디자인기능사</button>
    </div>
    <sub>
        <RouterView />
    </sub>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const $router = useRouter()
const route = useRoute()

const gotoPage = (id) => {
    $router.push({ path: `/wd/${id}` })
}
</script>

<style lang="scss" scoped></style>
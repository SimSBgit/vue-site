<template>
    <div id="wrapper">
        <main>
            <Header></Header>
            <Section></Section>
        </main>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '../components/E1_compo/Header.vue';
import Section from '../components/E1_compo/Section.vue';
import Footer from '../components/E1_compo/footer.vue';
</script>

<style scoped>
#wrapper {
    width: 100%;
    display: grid;
    grid-template-rows: calc(100vh - 340px) 120px;
}
main {
    width: 100%;
    display: flex;
}
</style>
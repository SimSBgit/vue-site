<template>
    <div id="rootContainer">
        <div class="content">
        <Header>

        </Header>
        <main>
            <Section>
                
            </Section>
        </main>
        </div>
        <Footer>

        </Footer>
    </div>
</template>

<script setup>
import Header from '../wd_compo/Header.vue';
import Section from '../wd_compo/Section.vue';
import Footer from '../wd_compo/Footer.vue';
</script>

<style scoped>
    #rootContainer {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin-right: 5px;
        margin-left: 5px;
    }
    .content {
        display: flex;
        flex: 0 0 850px;
        width: 100%;
    }
    main {
        width: calc(100% - 200px);
    }
    
</style>
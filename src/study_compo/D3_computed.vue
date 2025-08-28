<template>
    <div>
        <label>
            <input type="checkbox" v-model="chbxVal">
            {{ isImportant }}
        </label>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

    const chbxVal = ref(false)
    const isImportant = computed(() => {
        if(chbxVal.value){
            return "중요함"
        } else {
            return "뭣이 중헌디"
        }
    })
</script>

<style lang="scss" scoped>

</style>
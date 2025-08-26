<template>
  <p v-if="InStock">재고 있음</p>
  <p v-else>재고 없음</p>
  <hr>

  <p v-if="InStock2 > 3">재고 있음</p>
  <p v-else>재고 없음</p>
  <hr>

  <p v-if="InStock3 > 3">재고 있음</p>
  <p v-else-if="InStock3 > 0">재고 적음</p>
  <p v-else-if="InStock3 == 0">재고 없음</p>
  <p v-else>예약중</p>
  <hr>

  <p v-if="text.includes('pizza')">텍스트에 pizza 있음</p>
  <p v-else>텍스트에 피자 없음</p>
  <hr>

  <div v-if="text2.includes('피자')">
    <p>텍스트에 피자 있음</p>
    <img src="../assets/img_pizza.svg" alt="피자 이미지">
  </div>
  <p v-else>텍스트에 피자 없음</p>
  <hr>

  <div v-if="text3.includes('pizza')">
    <p>pizza는 있지만, 부리또는 없음</p>
    <img src="../assets/img_pizza.svg" alt="">
  </div>
  <div v-else-if="text3.includes('부리또')">
    <p>부리또는 있지만, pizza 없음</p>
    <img src="../assets/img_burrito.svg" alt="부리또">
  </div>
  <p v-else>pizza 또는 부리또가 텍스트에 없음</p>
  <hr>


</template>

<script setup>
import { ref } from 'vue';

const InStock = ref(true)
const InStock2 = ref(3)
const InStock3 = ref(-1)
const text = ref('I like taco, pizza, Thai beef salad, pho soup and tagine.')
const text2 = ref('I like taco, 피자, Thai beef salad, pho soup and tagine.')
const text3 = ref('I like 부리또, 피자, Thai beef salad, pho soup and tagine.')
</script>

<style scoped></style>
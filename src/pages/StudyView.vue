<script setup>
import D2_bind from '../study_compo/D2_bind.vue';
import D2_if from '../study_compo/D2_if.vue';
import D2_show from '../study_compo/D2_show.vue';
import D3_for from '../study_compo/D3_for.vue';
import D3_event from '../study_compo/D3_event.vue';
import D3_method from '../study_compo/D3_method.vue';
import D3_model from '../study_compo/D3_model.vue';
import D3_computed from '../study_compo/D3_computed.vue';
import D3_watchers from '../study_compo/D3_watchers.vue';
import { ref } from 'vue';

// 컴포넌트 맵
const pages = { D2_bind, D2_if, D2_show, D3_for, D3_event, D3_method, D3_model, D3_computed, D3_watchers }
const activeComp = ref('D3_for')
</script>

<template>
  <!-- 페이지 클릭시 보여줄 컴포넌트 -->
  <button v-on:click="activeComp = 'D2_bind'">v-bind</button>
  <button @click="activeComp = 'D2_if'">if</button>
  <button @click="activeComp = 'D2_show'">show</button>
  <button @click="activeComp = 'D3_for'">for</button>
  <button @click="activeComp = 'D3_event'">event</button>
  <button @click="activeComp = 'D3_method'">method</button>
  <button @click="activeComp = 'D3_model'">model</button>
  <button @click="activeComp = 'D3_computed'">computed</button>
  <button @click="activeComp = 'D3_watchers'">watchers</button>

  <div class="page-view">
    <KeepAlive>
      <component :is="pages[activeComp]"></component>
    </KeepAlive>
  </div>
</template>

<style scoped>
.page-view {
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
}

button {
  margin: 10px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.15));
}
</style>

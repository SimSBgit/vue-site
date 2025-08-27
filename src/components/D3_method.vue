<template>
   <div class="bg">
      <p>아래 박스 클릭</p>
      <div>
         <div class="b1" @click="changeText">
            {{ text }}
         </div>
      </div>
   </div>

   <div class="bg">
      <div>
         <div class="b1" @mousemove="mousePos">
            <span>{{ xPos }}</span><br>
            <span>{{ yPos }}</span>
         </div>
      </div>
   </div>

   <div class="bg">
      <div>
         <p>{{ count }}</p>
         <button @click="addCount(1)">+1</button>
         <button @click="addCount(5)">+5</button>
         <button @click="addCount(-1)">-1</button>
      </div>
   </div>

   <div class="bg">
      <div class="b2">
         <p>아래 호랑이를 클릭하세요.</p>
         <img :src="img_tiger_square" id="tiger" @click="myMethod($event, '어흥!')" alt="어흥">
         <p>{{ msgAndId }}</p>
      </div>
   </div>

   <!-- 스스로 해보기 -->
   <div class="bg3">
      <div id="tigers">
         <img :src="img_tiger_square" alt="어흥">
         <button @click="btnClick($event, 1)">+1</button>
         <button @click="btnClick($event, 5)">+5</button>
         <button @click="btnClick($event, -1)">-1</button>
      </div>
      <div id="moose">
         <img :src="img_moose_square" alt="순록">
         <button @click="btnClick($event, 1)">+1</button>
         <button @click="btnClick($event, 5)">+5</button>
         <button @click="btnClick($event, -1)">-1</button>
      </div>
      <div id="kangaroos">
         <img :src="img_kangaroo_square" alt="캥거루">
         <button @click="btnClick($event, 1)">+1</button>
         <button @click="btnClick($event, 5)">+5</button>
         <button @click="btnClick($event, -1)">-1</button>
      </div>
      <ul>
         <li>Tigers: {{ tigers }}</li>
         <li>Moose: {{ moose }}</li>
         <li>Kangaroos: {{ kangaroos }}</li>
      </ul>
   </div>

   <!-- 스스로 해보기 -->
   <div class="bg">
      <div>
         <div class="b4" @mousemove="mousePos" v-bind:style="{ backgroundColor: `hsl(+xPos+, 80%, 80%)` }">
            <br><span>{{ xPos }}</span><br>
            <span>{{ yPos }}</span>
            <p id="t1">CSS: backgroundColor:'hsl(<strong>{{ xPos }}</strong>, 80%, 80%)'</p>
         </div>
      </div>
   </div>

   <!-- 스스로 해보기 -->
   <div class="bg3">
      <div id="aaa">
         <textarea @input="writeText" rows="8" cols="30" placeholder="입력하세요."></textarea>
         <div :style="{ backgroundImage: `url(${img_notebook})` }">
            <span>{{ text1 }}</span>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import img_tiger_square from '../assets/img_tiger_square.jpeg'
import img_moose_square from '../assets/img_moose_square.jpeg'
import img_kangaroo_square from '../assets/img_kangaroo_square.jpeg'
import img_notebook from '../assets/img_notebook.jpg'

const text = ref('')
const changeText = () => {
   text.value = "안녕!"
}

const xPos = ref(0)
const yPos = ref(0)

const mousePos = (e) => {
   xPos.value = e.offsetX
   yPos.value = e.offsetY
}

const count = ref(0)
const addCount = (num) => {
   count.value += num
}

const msgAndId = ref('')
const myMethod = (e, msg) => {
   msgAndId.value = msg + " I'm a "
   msgAndId.value += e.target.id + '.'
}
// 아래는 셀프로 해본 것.

const tigers = ref(0)
const moose = ref(0)
const kangaroos = ref(0)
const btnClick = (e, numb) => {
   if (e.target.parentElement.id === "tigers") {
      tigers.value += numb
   }
   else if (e.target.parentElement.id === "moose") {
      moose.value += numb
   }
   else {
      kangaroos.value += numb
   }
}

// notebook 예제
const text1 = ref('')
const writeText = (e) => {
   text1.value = e.target.value
}
</script>

<style scoped>
.bg {
   margin: 10px;
   border-bottom: 3px double rgb(141, 106, 141);
}

.b1 {
   width: 200px;
   height: 100px;
   background-color: lightblue;
   display: inline-block;
}

.b4 {
   background-color: lightblue;
   display: inline-block;
   padding: 10px;
}

.bg3 {
   margin: 10px;
   border-bottom: 3px double rgb(141, 106, 141);
   display: flex;
   flex-direction: column;
   align-items: center;
}

.b2>img {
   width: 200px;
   height: 200px;
}

#tigers img,
#moose img,
#kangaroos>img {
   width: 200px;
   height: 200px;
}

#tigers,
#moose,
#kangaroos {
   width: 210px;
}

button {
   background-color: #d4dacd;
   margin: 5px;
}

#t1 {
   text-align: start;
}

#aaa {
   border: black dashed 1px;
   width: 300px;
   padding: 20px;
}

#aaa>div {
   width: 100%;
   position: relative;
   margin-top: 10px;
   aspect-ratio: 1;
   background-size: 340%;
   background-position: -345px 0;
   overflow: hidden;
}

#aaa span {
   width: 80%;
   font-weight: bold;
   font-family: 'Courier New', Courier, monospace;
   line-height: 1.2em;
   transform-origin: 0 0;
   rotate: 33deg;
   position: absolute;
   top: 50px;
   left: 70px;
}

#aaa textarea {
   width: 100%;
   box-sizing: border-box;
}
</style>
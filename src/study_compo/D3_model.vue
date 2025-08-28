<template>
    <!-- 예제1 -->

    <div class="bg">
        <div class="b1">
            <p>{{ inpText }}</p>
            <input type="text" v-model="inpText">
        </div>
    </div>

    <!-- 예제2 -->
    
    <div class="bg">
        <div class="b1">
            <p>중요한 물건?</p>
            <label>
                <input type="checkbox" v-model="important">
                {{ important }}
            </label>
        </div>
    </div>

    <!-- 장보기 예제3 -->

    <div class="bg">
        <div class="b2">
            <form @submit.prevent="addItem">
                <p>
                    필요한 물건? <br>
                    <input type="text" v-model="itemName" required placeholder="물품 이름..">
                </p>
                <p>
                    얼만큼? <br>
                    <input type="number" required v-model="itemNumber" placeholder="필요한 수량..">
                </p>
                <p>
                    중요도? 
                    <label>
                        <input type="checkbox" v-model="itemImportant">
                        {{ itemImportant }}
                    </label>
                </p>
                <button type="submit">목록 추가하기</button>
            </form>
            <hr>
            <div>
                <p><strong>쇼핑 리스트</strong></p>
                <ol>
                    <li :key="list.name" v-for="list in shoppingList"
                    v-bind:class="{impClass: list.important}">
                        목록: {{ list.name }} /                        갯수: {{ list.number }} /
                        중요도: {{ list.important }}
                    </li>
                </ol>
            </div>
        </div>
    </div>

<!-- 장보기 목록 직접 해보기 -->

    

</template>

<script setup>
import { ref } from 'vue';

const inpText = ref('Initial text')

const important = ref(false)

const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)

const addItem = () => {
    let item = {
        name: itemName.value,
        number: itemNumber.value,
        important: itemImportant.value,
    }
    shoppingList.value.push(item)
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false
}

const shoppingList = ref([
          { name: 'Tomatoes', number: 5, important: false },
          { name: 'banana', number: 3, important: true },
        ])

</script>

<style scoped>
.bg {
    margin: 10px;
    border-bottom: 3px double rgb(177, 146, 146);
}

.b1 {
    width: 200px;
    height: 100px;
    background-color: #F5F5F7;
    display: inline-block;
}
.b2 {
    background-color: #F5F5F7;
    display: inline-block;
    padding: 20px;
}
.b2 li {
    border-bottom: 1px solid rgb(87, 87, 128);
    text-align: left;
}

label {
    padding: 5px;
}

label:hover {
    cursor: pointer;
    background-color: lightgray;
    border-radius: 5px;
}
.b2 button {
    background-color: #d4dacd;
}
.b2 button:hover {
    border: 2px solid lightblue;
    background-color: lightblue;
}
.impClass {
    background-color: lightblue;
    font-weight: bolder;
}

</style>
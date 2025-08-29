<template>
    <div class="announcement">
        <div class="head">공지사항</div>
        <div class="content">
            <div style="border-top: 1px solid gray;" class="line" @click="openModal('장바구니 쿠폰 관련 공지')">
                장바구니 쿠폰 관련 공지
            </div>
            <div class="line" @click="openModal('개인정보처리방침 개정 안내')">
                개인정보처리방침 개정 안내
            </div>
            <div class="line" @click="openModal('체험단 신청 대상 회원등급 변경 안내')">
                체험단 신청 대상 회원등급 변경 안내
            </div>
            <div class="line" @click="openModal('기상악화로 인한 배송 지연 양해 안내')">기상악화로 인한 배송 지연 양해 안내</div>
        </div>
        <!-- 모달 -->
        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
                <p>{{ modalContent }}</p>
                <button @click="closeModal">닫기</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const isModalOpen = ref(false)
const modalContent = ref("")

function openModal(content) {
    modalContent.value = content
    isModalOpen.value = true
}

function closeModal() {
    isModalOpen.value = false
}
</script>

<style scoped>
/* 공지사항 CSS */
.announcement {
    display: grid;
    grid-template-rows: 25% 75%;
}

.head {
    background-color: lightgray;
    text-align: left;
    padding-left: 40px;
    line-height: 59px;
    font-weight: bolder;
    font-size: large;
}

.content {
    display: grid;
    grid-template-rows: 25% 25% 25% 25%;
}

.line {
    background-color: #f5f5f5;
    line-height: 44px;
    text-align: left;
    padding-left: 20px;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 2px solid gray;
}

.line:hover {
    background-color: rgb(204, 225, 231);
}

/* 모달 CSS */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 10px;
    min-width: 300px;
}
</style>
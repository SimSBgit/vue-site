<template>
    <div class="slider">
        <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(image, idx) in images" :key="idx" class="slide">
                <img :src="image" alt="slide image" />
            </div>
        </div>
    </div>
</template>

<script>
import style1 from '../../assets/style1.avif'
import style2 from '../../assets/style2.avif'
import style3 from '../../assets/style3.avif'

export default {
    name: "Slider",
    data() {
        return {
            currentIndex: 0,
            images: [
                style1,
                style2,
                style3,
            ],
            intervalId: null
        };
    },
    mounted() {
        this.startSlide();
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
    },
    methods: {
        startSlide() {
            this.intervalId = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            }, 3000); 
        }
    }
};
</script>

<style scoped>
.slider {
    width: 100%;
    height: calc(100vh - 340px);
    overflow: hidden;
    position: relative;
}

.slides {
    display: flex;
    transition: transform 0.6s ease-in-out;
    height: 100%;
}

.slide {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>

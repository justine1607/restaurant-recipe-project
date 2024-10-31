<template>
    <div class="block-slider">
      <div class="theme-container">
        <div class="grid">
          <div class="text-title">
            <div class="title theme-h2">{{ sliderData.title }}</div>
          </div>
          <div class="slide-container">
            <div class="slides" v-for="(slide, index) in sliderData.items" :key="slide.id" :class="{ active: index === activeSlideIndex }">
                <img :src="slide.image" alt="food-pic" />
                <div class="carousel-text-container">
                  <div class="theme-h2 headline">{{ slide.headline }}</div>
                  <div class="text theme-h3">{{ slide.text }}</div>
                </div>
            </div>
            <div class="carousel-btn">
              <span class="prev" @click="prevSlide">&#10094;</span>
              <span class="next" @click="nextSlide">&#10095;</span>
            </div>
            <div class="dotsContainer">
              <span v-for="(dot, index) in sliderData.items" :key="index" :class="{ dot: true, active: index === activeSlideIndex }" @click="setSlide(index)"></span>
            </div>
            <div class="button">
              <router-link  class="theme-h3 cta" @click="toggleRecipe" to="/recipe">
                {{sliderData.ctaTitle}}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
export default {
  props:{
    sliderData:{
      type:Object,
      default: () => ({items:[]})
    }
  },
  setup(props) {
    const isTeleporting = ref(false)
    const router = useRouter();
    const activeSlideIndex = ref(0);

    const toggleRecipe = async () => {
      isTeleporting.value = true;
      await router.push('/recipe');
    };
    const nextSlide = () => {
      if (props.sliderData.items && props.sliderData.items.length > 0) {
        activeSlideIndex.value = (activeSlideIndex.value + 1) % props.sliderData.items.length;
      }
    };

    const prevSlide = () => {
      if (props.sliderData.items && props.sliderData.items.length > 0) {
        activeSlideIndex.value = (activeSlideIndex.value - 1 + props.sliderData.items.length) % props.sliderData.items.length;
      }
    };

    const setSlide = (index) => {
      activeSlideIndex.value = index;
    };
    return {
      isTeleporting,
      toggleRecipe,
      activeSlideIndex,
      nextSlide,
      prevSlide,
      setSlide,
    };
  },
};
</script>
<style lang="scss">
@import "src/assets/styles/blocks/slider";
</style>

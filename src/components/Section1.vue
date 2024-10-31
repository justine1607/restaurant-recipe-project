<template>
    <div class="block-section1">
        <div class="theme-container">
            <div class="grid">
                <div class="header">
                  <h3 class="title theme-h2" >{{ specialtiesData.title }}</h3>
                </div>
                <div class="card-1 card" v-for="specialty in specialtiesData.items" :key="specialty.id">
                  <div class="image-container">
                    <img :src="specialty.image" alt="talong" />
                  </div>
                    <div class="card-content">
                      <h3 :class="['theme-h3', `align-${specialty.align}`]">{{ specialty.description }}</h3>
                      <p class="theme-h3 price">{{ specialty.price }}</p>
                      <div class="green">
                        <img :src="specialty.starImg" alt="rating-star" />
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, ref} from 'vue';

export default {
  components: {},
  props: {
    specialtiesData: {
      type: Object,
      default: () => ({})
    }
  },
  watch() {
    console.log('HeroData:', this.specialtiesData);
  },
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.card , .header');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      });
      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    return {
    };
  },
};
</script>

<style lang="scss">
@import "src/assets/styles/blocks/section1";
</style>

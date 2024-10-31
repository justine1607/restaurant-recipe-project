<template>
  <div class="block-review">
      <div class="theme-container">
          <div class="grid">
              <div class="text-title">
                <div class="description-trans theme-h2">{{ reviewData.title}}</div>
              </div>
              <div class="card" v-for="review in reviewData.items" :key="review.id">
                  <img :src="review.star" alt="rating-star" />
                  <img :src="review.colon" alt="colon" />
                  <div class="card-text">
                    <div class="theme-h3">{{ review.description}}</div>
                  </div>
                  <img :src="review.avatar" class="right-quote" alt="">
                  <div class="hr"></div>
                  <div class="circle">
                    <span class="circle-img"></span>
                    <h3 class="theme-h3">{{ review.name}}</h3>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import {onMounted, ref} from 'vue';

export default {
  props:{
    reviewData:{
      type:Object
    }
  },
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.card, .description-trans');
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      });
      elements.forEach((element) => {
        observer.observe(element);
      });


    });

    return {
    };
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/blocks/reviews";
</style>
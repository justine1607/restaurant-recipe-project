<template>
  <div class="block-story">
      <div class="theme-container">
          <div class="grid">
              <div class="image-container">
                <img :src="storyData.image" alt="food pic" />
              </div>
              <div class="text description-trans">
                <div class="theme-h2 headline">{{storyData.headline }}</div>
                <div class="theme-h3 description">{{storyData.description}}</div>
              </div>
          </div>
        </div>
      </div>
</template>
<script>
import {onMounted, ref} from "vue";
export default {
  props:{
    storyData:{
      type: Object,
      default: () =>({})
      }
    },
    setup() {
        onMounted(() =>{
          const elements = document.querySelectorAll('.image , .description-trans');
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate');
              } else {
                entry.target.classList.remove('animate');
              }
            });
          }, );
          elements.forEach((element)  => {
            observer.observe(element);
          });

        });
        return{
        }
    },
}
</script>
<style lang="scss">
@import "src/assets/styles/blocks/ourStory";
</style>
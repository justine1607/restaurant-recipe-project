<template>
    <div class="block-gallery">
      <div class="theme-container">
          <div class="text-title">
            <div class="description-trans theme-h2">{{ galleryData.title }}</div>
          </div>
          <div class="card" v-for="gallery in galleryData.items" :key="gallery.id">
            <img :src="gallery.image1" alt="gallery-pic" class="gallery_img1" />
            <img :src="gallery.image2" alt="gallery-pic" class="gallery_img2" />
            <img :src="gallery.image3" alt="gallery-pic" class="gallery_img3" />
            <img :src="gallery.image4" alt="gallery-pic" class="gallery_img4" />
          </div>
        </div>
    </div>
</template>

<script>

import {onMounted, ref} from 'vue';

export default {
  props:{
    galleryData:{
      type:Object
    }
  },
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.description-trans, .card-center, .card-right, .card-left');
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
@import "src/assets/styles/blocks/gallery";
</style>

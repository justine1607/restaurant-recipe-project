<template>
    <div class="block-main_menu">
      <div class="theme-container">
        <div class="grid" >
          <div class="text-title description-trans">
            <div class="theme-h2"> {{ mainMenuData.title }}</div>
          </div>
          <div class="card" v-for="menu in mainMenuData.items" :key="menu.id">
            <div class="image-container">
              <img :src="menu.image" alt="talong" />
            </div>
            <div class="text-container">
              <div class="theme-h3">{{ menu.description}}</div>
              <div class="theme-h3 price">{{ menu.price }}</div>
            </div>
            <div class="button button-container">
              <router-link class="theme-h3 cta" to="/menu">{{menu.cta}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {onMounted, ref} from "vue";
export default {
  props:{
    mainMenuData:{
      type:Object
    }
  },
    setup() {
      onMounted(() =>{
        const elements = document.querySelectorAll('.card , .description-trans');
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
@import "src/assets/styles/blocks/mainmenu";
</style>
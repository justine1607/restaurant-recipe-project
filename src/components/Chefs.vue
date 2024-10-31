<template>
    <div class="block-chefs">
      <div class="theme-container">
        <div class="grid">
          <div class="description-trans text-title theme-h2">{{chefsData.title }}</div>
            <div class="card" v-for="chef in chefsData.items" :key="chef.id">
              <div class="image-container">
                <img :src="chef.image" alt="chefs-pic" />
              </div>
              <div class="text-container">
                <div class="theme-h3">{{chef.name }}</div>
                <div class="theme-h3 label"> {{ chef.label }} </div>
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
    chefsData:{
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
        },);

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
@import "src/assets/styles/blocks/chefs";
</style>
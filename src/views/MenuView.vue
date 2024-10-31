<template>
    <div class="block-menu-view">
        <div class="theme-container">
          <div class="grid">
            <div class="appetizer" v-for="item in menus.menus" :key="item.id">
              <h3 class="theme-h2 menus-headline">{{item.headline}}</h3>
              <img :src=item.image class="menu_view_img" alt="appeite">
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import {onMounted, ref} from "vue";
export default {
  setup(){
    const menus = ref({});
    onMounted(() => {
      fetch('https://restaurant-recipe-1.onrender.com/menus')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log(data)
            menus.value = data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    });
    return{
      menus,
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/blocks/menuview";
</style>

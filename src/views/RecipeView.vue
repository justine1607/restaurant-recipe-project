<template>
  <div class="block-recipe">
    <div class="container">
        <div class="card-1 card">
          <h3 class="title theme-h2">{{recipe.title}}</h3>
            <div class="text-wrapper" v-for="item in recipe.recipe" :key="item.id" >
              <div class="image-container">
                <img :src=item.image alt="">
              </div>
              <div class="text-container">
                <div>
                  <p class="count">{{item.count}}</p>
                </div>
                <h3 class="headline">{{ item.headline }}</h3>
                <div class="recipe-method">
                  <div class="ingredients">
                    <h4>Ingredients:</h4>
                    <ul>
                      <li v-for="(ingredient, index) in item.ingredients" :key="index">
                        {{ ingredient }}
                      </li>
                    </ul>
                  </div>
                  <div class="directions">
                    <h4>directions</h4>
                      <div v-for="(step, index) in item.steps" :key="index">
                        <h3>{{ step.step }}</h3>
                        <p>{{ step.description }}</p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "src/assets/styles/blocks/recipe";
</style>
<script>import {onMounted, ref} from "vue";
export default {
  components: {},
  props: {
    heroData: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const recipe = ref({}, []);
    onMounted(() => {
      fetch('https://restaurant-recipe-1.onrender.com/recipe')
          .then(response => response.json())
          .then(data => {
            recipe.value = data;
          })
          .catch(error => console.error('Error fetching recipe data:', error));

    });
    return {
      recipe
    }
  }
}
</script>
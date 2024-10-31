<template>
  <h1>
    hello
  </h1>
<!--  the id here is form the route you add in index.js that has a parameter id name-->
  <p>the params id is {{ id }}</p>
</template>

<script>


import {ref} from "vue";
import {useRoute} from "vue-router";

export default {

  setup(){
    const route = useRoute();
    const id = ref(route.params.id)

    return{
      id

    }
  }
}
</script>
<style>
h1{
  color: #ede6d6;
}
</style>
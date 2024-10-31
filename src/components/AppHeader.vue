<template>
    <div class="block-header">
        <div class="theme-container header-container">
            <div class="hero-grid">
            <div class="text-container">
              <div class="header theme-h1" v-html="heroData.headline || ''"></div>
              <div class="text">{{ heroData.text}}</div>
              <div class="hero-btn" @click="toggleModal">
                <button class="btn cta" type="button">{{ heroData.button}}</button>
              </div>
            </div>
              <div class="media-container">
                <img :src="heroData.image" alt="Heropic" class="media" />
              </div>
            </div>
            <div v-if="showModal">
              <teleport to="#modal">
                <Modal :header="header" :firstname="firstname" v-model:firstname="firstname" theme="sale" @close="toggleModal" />
              </teleport>
            </div>
        </div>
    </div>
</template>
<script>
import {onMounted, ref} from "vue";
import Modal from "@/components/Modal.vue";

export default {
  name:"AppHeader",
  components: {Modal},
  props:{
    heroData:{
      type:Object,
      default: () => ({})
    }
  },
  setup() {
    const header = ref({
      title: 'Reserve Table',
      text: 'Please fill the form below to enable us serve you better!'
    });
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const phone = ref('')

    const showModal = ref(false)
    const toggleModal = () => {
      showModal.value = !showModal.value
    }

    onMounted(() => {

    });

    return {
      showModal,
      header,
      toggleModal,
      firstname,lastname,email,phone
    };
  },
}
</script>
<style lang="scss">
@import "../assets/styles/blocks/header";
</style>

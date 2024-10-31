<template>
    <AppHeader v-if="hero" :key="hero.id" :heroData="hero"/>
    <Section1 v-if="specialties" :key="specialties.id" :specialtiesData="specialties"/>
    <Slider v-if="slider" :key="slider.id" :sliderData="slider"/>
    <OurStory v-if="story" :key="story.id" :storyData="story"/>
    <MainMenu v-if="mainMenu" :key="mainMenu.id" :mainMenuData="mainMenu"/>
    <Review v-if="review" :key="review.id" :reviewData="review"/>
    <Chefs v-if="chefs" :key="chefs.id" :chefsData="chefs"/>
    <Gallery v-if="gallery" :key="gallery.id" :galleryData="gallery"/>
    <Form v-if="form" :key="form.id" :formData="form"/>
    <footer>
      <Footer/>
    </footer>
</template>

<script>
import { onMounted, ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import Section1 from "@/components/Section1.vue";
import Slider from "@/components/Slider.vue";
import OurStory from "@/components/OurStory.vue";
import MainMenu from "@/components/MainMenu.vue";
import Review from "@/components/Review.vue";
import Chefs from "@/components/Chefs.vue";
import Gallery from "@/components/Gallery.vue";
import gallery from "@/components/Gallery.vue";
import Form from "@/components/Form.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "ParentComponent",
  computed: {
    gallery() {
      return gallery
    }
  },
  components: {AppHeader, Section1,Slider,OurStory,MainMenu,Review,Chefs,Gallery,Form,Footer},
  setup() {
    const hero = ref({});
    const specialties = ref({},[]);
    const slider = ref({},[]);
    const story = ref({});
    const mainMenu = ref({});
    const review = ref({},[]);
    const chefs = ref({},[]);
    const gallery = ref({});
    const form = ref({}, []);


    onMounted(() => {
      fetch('https://restaurant-recipe-1.onrender.com/header')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('fetched data', data)
            hero.value = data.data.hero;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });


      fetch('https://restaurant-recipe-1.onrender.com/specialties')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            specialties.value = data.specialties;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });


      fetch('https://restaurant-recipe-1.onrender.com/slider')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            slider.value = data.data.slider;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });


      fetch('https://restaurant-recipe-1.onrender.com/our_story')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            story.value = data.data.story;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });


      fetch('https://restaurant-recipe-1.onrender.com/main_menu')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            mainMenu.value = data.data.mainMenu;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });

      fetch('https://restaurant-recipe-1.onrender.com/review')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            review.value = data.data.review;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });

      fetch('https://restaurant-recipe-1.onrender.com/chefs')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            chefs.value = data.data.chefs;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });


      fetch('https://restaurant-recipe-1.onrender.com/gallery')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            gallery.value = data.data.gallery;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });

      fetch('https://restaurant-recipe-1.onrender.com/form')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            // console.log(data);
            form.value = data.data.form;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    });
    return {
      specialties,
      hero,
      slider,
      story,
      mainMenu,
      review,
      chefs,
      gallery,
      form,
      Footer
    };
  },
};
</script>

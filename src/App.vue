<template>
    <div class="scroll-watcher"></div>
    <header :class="{ sticky: isSticky, head: burgerMenu }">
      <div class="theme-container">
        <div class="nav-grid">
          <nav :class="{ show: isShow }">
            <ul v-if="main && main.items" :key="main.id">
              <li v-for="link in main.items" :key="link.id">
                <router-link :to="link.subject.to">
                  <div class="headline" :class="{ sticky: isSticky }" v-if="link.name === 'page'">
                    {{ link.label }}
                  </div>
                  <div class="headline hover-headline" :class="{ sticky: isSticky }" v-else-if="link.name === 'submenu'">
                    {{ link.label }}
                    <ul class="sub-menu">
                      <li v-for="child in link.children" :key="child.id">
                        <router-link :to="child.subject.to">
                          {{ child.label }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </router-link>
              </li>
            </ul>
          </nav>
          <div class="menu-x-icon" >
            <span :class="{ menuX : exMenu }">
              <img :class="{ menuX : exMenu }" class="menu-x" :src="`/assets/images/menuX.png`" @click="menuBarX" alt="menu icon" />
            </span>

          </div>
          <div class="menu-btn">
              <span :class="{ menu : burgerMenu }">
                <img class="menu-icon" :src="`/assets/images/menu.png`" @click="menuBar" alt="menu icon" />
              </span>
          </div>
          <div class="toggle-light" :class="{ 'is-visible': burgerMenu}">
            <p class="apperance theme-h3">apperance </p>
            <ul class="lightmode" :class="{ 'is-ul-visible': burgerMenu}">
              <li class="mode">
                <a href="#" v-if="!mode" @click="toggleMode">
                  <img class="brightness" :src="`/assets/images/lightmode/3.png`" alt="light mode icon">
                </a>
                <a href="#" v-else @click="toggleMode">
                  <img class="moon" :src="`/assets/images/lightmode/2.png`" alt="dark mode icon">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
   <router-view></router-view>
  </template>
<script>
import { ref, onMounted, onUnmounted } from 'vue';
export default {
  components: {},
  setup() {
    const main = ref({})
    const isSticky = ref(false);
    const home = ref([]);
    const isShow = ref(false)
    const burgerMenu = ref(false)
    const exMenu = ref(false)
    const mode = ref(false)

    const headerScroll = () => {
      if (!burgerMenu.value) {
        isSticky.value = window.scrollY > 0;
      }
      const isStickyValue = window.scrollY > 0;
      isSticky.value = isStickyValue;
    };
    onMounted(() => {
      window.addEventListener('scroll', headerScroll)

      fetch('https://restaurant-recipe-1.onrender.com/navigation')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log(data);
            main.value = data.navigation.main;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', headerScroll);
    });
    const toggleMenu = () => {
      const head = document.querySelector('header');
      if (burgerMenu.value) {
        head.classList.add('head');
      } else {
        head.classList.remove('head');
      }
      const navbar = document.querySelector('.nav-grid nav');
      const exit = document.querySelector('.menu-x-icon .menu-x');

      navbar.classList.add('navi');
      exit.classList.add('exmenu');
      burgerMenu.value = !burgerMenu.value;
    };
    const menuBar = () => {
      toggleMenu();
    }

    const menuBarX = () =>{
      toggleMenu();
      exMenu.value = !exMenu.value;
      const navbar = document.querySelector('.nav-grid nav');
      navbar.classList.remove('navi');

      const sticky = document.querySelector('header');
      sticky.classList.remove('sticky');
    }
    const toggleMode = () => {
      mode.value = !mode.value;
      document.body.classList.toggle("lightmode", mode.value);
    };
    return {
      main,
      isSticky,
      home,
      menuBar,
      menuBarX,
      burgerMenu,
      exMenu,
      isShow,
      mode,
      toggleMode,
    };
  }
};
</script>

<style lang="scss">
@import "assets/styles/theme/theme";
@import "assets/styles/core/reset";
</style>

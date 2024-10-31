<template>
  <div class="block-error">
    <div class="theme-container">
      <div class="error-text-container">
        <h3 class="theme-h3"> 404 not found</h3>
        <img :src="`/assets/images/error/1.png`" alt="error-image">
        <span>
          <p class="theme-h3">go back to <a href="/">hompage</a></p>
        </span>
      </div>

    </div>
  </div>

</template>
<script >
</script>
<style>
.block-error{
  .error-text-container{
    display: flex;flex-direction: column; justify-content: center;align-items: center;gap: 4rem;
    a{
      cursor: pointer;
      text-decoration-color: #00ff00;
    }
  }
}
</style>
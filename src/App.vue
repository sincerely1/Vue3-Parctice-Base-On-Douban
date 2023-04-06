<template>
  <div style="height:100%">
    <navheader></navheader>
    <div class="container">
      <RouterView v-slot="{ Component }">
        <component :is="Component"></component>
      </RouterView>
    </div>

    <navfooter></navfooter>

  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navheader from './components/navheader/navheader.vue'
import navfooter from './components/navfooter/navfooter.vue';
</script>
<style>
body,
html {
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
}

.container {
  width: 1040px;
  margin: 0 auto;
  min-height: calc(100% - 148px);
  height: auto;
}

.v-enter-to,
.v-leave-to {
  position: absolute;
  left: 0;
  right: 0;
}

.animated.faster {
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
}</style>


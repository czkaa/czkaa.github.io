<template>
  <div>
    <router-view v-slot="{ Component }" class="">
      <transition mode="out-in">
          <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
  </div>

</template>

<script>
  import { useRoute } from 'vue-router'
  export default {
    setup() {
      return {
        route: useRoute()
      };
    },
  }

</script>

<style lang="scss">

  html {
    font-size: 16px;
  }

  .scale-slide-enter-active,
  .scale-slide-leave-active {
    position: absolute;
    transition: all 0.85s ease;
  }


  .scale-slide-enter-from {
    left: 100%;
  }


  .scale-slide-enter-to {
    left: 0%;
  }


  .scale-slide-leave-from {
    left: 0%;
  }


  .scale-slide-leave-to {
    left: -100%;
  }
</style>

<script setup>
defineProps({
  content: Object,
});
</script>

<template>
  <div class="">
    <div
      class="prose"
      v-html="content.content.replace('*', '<i>').replace('*', '</i>')"
    ></div>
  </div>
</template>

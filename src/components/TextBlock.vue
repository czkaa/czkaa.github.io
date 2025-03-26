<script setup>
defineProps({
  content: Object,
});
</script>

<template>
  <div class="">
    <div
      v-html="content.content.replace('*', '<i>').replace('*', '</i>')"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  content: Object,
});
</script>

<template>
  <img
    :src="content.image.display.url"
    :alt="content.title"
    class="object-contain object-left-top"
  />
</template>

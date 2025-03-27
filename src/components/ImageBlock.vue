<script setup>
defineProps({
  content: Object,
});
</script>

<template>
  <img
    :src="content.image.large.url"
    :alt="content.title"
    class="object-contain object-left-top"
  />
</template>

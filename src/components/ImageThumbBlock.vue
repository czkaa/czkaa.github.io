<template>
  <div class="w-full">
    <img
      :src="content.image.display.url"
      alt="Thumbnail"
      class="max-w-full max-h-full object-cover"
    />
  </div>
</template>

<script setup>
defineProps({
  content: Object,
});
</script>

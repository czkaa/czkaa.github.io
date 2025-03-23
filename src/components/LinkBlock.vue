<script setup>
defineProps({
  content: Object,
});
</script>

<template>
  <div class="">
    <a
      :href="content.source?.url"
      target="_blank"
      class="text-blue-600 hover:text-blue-800"
    >
      {{ content.source?.url }}
    </a>
  </div>
</template>

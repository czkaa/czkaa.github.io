<script setup>
defineProps({
  content: Object,
});
</script>

<template>
  <div class="">
    <div
      v-html="
        content.content.replace(
          /\*/g,
          (() => {
            let i = 0;
            return () => (i++ % 2 === 0 ? '<i>' : '</i>');
          })()
        )
      "
    ></div>
  </div>
</template>

<template>
  <h2 basic-headline v-html="text" class="headline max-h-60 leading-none"/>
</template>

<script>

export default {
  props: {
    text: String
  },
}
</script>

<style lang="scss" scoped>

.headline {
  // writing-mode: vertical-rl;
  // transform: rotate(180deg);
}

</style>

<template>
  <a target="_blank" :href="link" basic-link class="block">{{link}}</a>
</template>

<script>

export default {
  props: {
    link: String
  },
}
</script>

<style lang="scss" scoped>

</style>

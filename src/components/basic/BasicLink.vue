<template>
  <div basic-link>
  {{text}} <a target="_blank" :href="link" class="underline"> {{link}}</a>
</div>
</template>

<script>

export default {
  props: {
    link: String,
    text: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

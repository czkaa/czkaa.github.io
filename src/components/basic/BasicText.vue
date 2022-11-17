<template>
  <div basic-text v-html="text" class="text-justify text-xs"/>
</template>

<script>

export default {
  props: {
    text: String
  },
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div basic-text v-html="text" class="text-justify"/>
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

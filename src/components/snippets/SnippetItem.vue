<template>
  <div snippet-item class="w-full h-full p-3">
    <div class="grid grid-cols-2 gap-12">
      <SnippetItemBlock v-if="item.base_class === 'Block'"  :item="item" class="col-start-2"/>
    </div>


    <SnippetItemChannel v-if="item.base_class === 'Channel'" :item="item"/>
  </div>
</template>

<script>

export default {
  props: {
    item: Object
  },
}
</script>

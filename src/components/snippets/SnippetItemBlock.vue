<template>
  <div snippet-item-block>
    <!-- displaying only text and links not images -->
    <BasicText v-if="item.class === 'Text'" :text="item.content_html" />

    <BasicLink v-if="item.class === 'Link'" :link="item.source.url" text="contributed code to"/>
  </div>
</template>

<script>

export default {
  props: {
    item: Object
  },
}
</script>

<template>
  <div snippet-project class="resize-x overflow-hidden resizer transform rotate-180 scale-x-mirror">

    <div class="transform rotate-180 scale-x-mirror space-y-5">
      <BasicHeadline :text="project.meta.title" />

      <BasicText :text="project.meta.metadata.description" />

      <div class="space-y-5">
        <BasicLink v-for="link in links" :link="link.source.url" :key="link.id"/>
      </div>

      <div class="grid grid-cols-1 gap-5">
        <BasicImage v-for="image in images" :image="image.image.display" :key="image.id" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    project: Object
  },
  computed: {
    texts() {
      return this.project.content.filter(item => item.class === 'Text');
    },
    links() {
      return this.project.content.filter(item => item.class === 'Link');
    },
    images() {
      return this.project.content.filter(item => item.class === 'Image');
    }
  }
}
</script>

<style lang="scss" scoped>

  *::-webkit-resizer {
    border: 10px solid black;
    background: black;
    border-radius: 100%;
  }

</style>

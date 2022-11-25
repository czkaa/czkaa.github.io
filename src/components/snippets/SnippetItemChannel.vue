<template>
  <div v-if="data" snippet-item-channel class="w-full h-full grid grid-cols-2 gap-12">

    <div class="block">
      <BasicImage class="w-full filter object-contain object-left drop-shadow-custom" :style="{maxHeight: '75vh'}" :image="images[value].image.display"/>
    </div>

    <div class="space-y-2">
      <BasicText :text="item.metadata.description"/>

      <template v-for="block in data.contents" :key="block.id" class="">
        <BasicText v-if="block.class === 'Text'" :text="block.content_html" />
      </template>

      <template v-for="block in data.contents" :key="block.id">
        <BasicLink v-if="block.class === 'Link'" :link="block.source.url" class="text-right"/>
      </template>
    </div>

     <nav
       :class="[
         'w-1/3 h-2 z-50',
         'fixed bottom-7 ml-2.5 left-1/2 -mt-0 transform -rotate-45 origin-top-left',
       ]"
     >
       <input
         type="range"
         min="0"
         v-model="value"
         :max="images.length - 1 "
         :disabled="images.length === 0"
         class="w-full h-1 transform scale-y-mirror"
       >
       <div id="datalist" class="-mt-6">
         <option
           v-for="(item, index) in images"
           :value="index"
           :label="index"
         />
       </div>
     </nav>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    item: Object
  },
  data() {
    return {
      data: null,
      value: 0
    }
  },
  computed: {
    images() {
      return this.data ? this.data.contents.filter(item => item.class === 'Image') : null
    }
  },
  methods: {
    fetchData(channelString) {
      this.error = null
      axios
        .get(`https://api.are.na/v2/channels/${channelString}`)
        .then((response) => {
          if (response) {
            this.data = response.data
            console.log(this.data)
          } else {
            console.log('error')
          }
      })
    },
  },
  mounted() {
    console.log('MOUNTED')
    this.fetchData(this.item.slug)
  }
}
</script>

<style lang="scss" scoped>
 #datalist {
  display: flex;
  justify-content: space-between;
  @apply text-xs;
  option {
    @apply pointer-events-none transform rotate-45;
    &:first-child {
      @apply ml-2;
    }
  }
}
</style>

<template>
  <div v-if="data" snippet-channel >

    <nav
      :class="[
        'w-full h-2 py-4 px-3',
        'fixed bottom-4 left-0 -mt-0',
      ]"
    >
      <input
        type="range" min="0" v-model="value"
        :max="data.contents.length - 1 "
        :disabled="data.contents.length === 1"
        class="w-full h-1 transform scale-y-mirror"
      >
      <div id="datalist" class="transform -translate-y-6">
        <option
          v-for="(item, index) in data.contents"
          :value="index"
          :style="{width: `${100 / data.contents.length}%`}"
          :label="
            item.class === 'Text'
            ? '[event]'
            : item.class === 'Channel'
              ? `${item.title}`
              : '[job]'
          "
        />
      </div>
    </nav>

    <div class="fixed w-full left-0 top-0 z-50">
      <template v-for="(item, index) in data.contents"  :key="item.id">
        <SnippetItem  :item="item" v-if="index === parseInt(value)" class="w-full pointer-events-auto"/>
      </template>
    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    channel: Object
  },
  data() {
    return {
      data: null,
      value: 0
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
          } else {
            console.log('error')
          }
      })
    },
  },
  mounted() {
    console.log('MOUNTED')
    this.fetchData(this.channel.slug)
  }
}
</script>

<style lang="scss" scoped>
#datalist {
  display: flex;
  justify-content: space-between;
  @apply pointer-events-none text-xs;
  option {
    @apply  text-center flex-grow-0;

    &:first-child {
      @apply text-left;
    }
    &:last-child {
      @apply text-right ;
    }
  }
}
</style>

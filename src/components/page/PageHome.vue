<template>

  <div v-if="channels" class="flex flex-col absolute w-full h-full">
    <div page-home class="w-full h-full">
      <template v-for="channel in channels" :key="channel.id">
        <SnippetChannel  v-if="channel.title.toString() === value.toString()" :channel="channel" class="w-full"/>
      </template>
    </div>
<!--
    <div class="fixed bottom-0 right-0 bg-white flex space-x-2 pb-1 px-2 text-xs">
      <BasicText :text="`last updated ${data.updated_at} `" />
      <BasicLink text="on are.na" :href="`https://www.are.na/${data.owner.slug}/${data.slug}`" />
    </div> -->


    <nav class="fixed -top-0 left-1/2 ml-5 w-full pr-8 pl-3 transform origin-top-left rotate-90" :style="{width: 'calc(100vh)'}">
      <input type="range"  class="w-full h-1 z-50" min="2013" v-model="value" max="2022" >

      <div id="datalist" class="text-xs transform translate-y-5">
        <div class="invisible">none</div>
        <option value="2014">2014</option>
        <div class="invisible">none</div>
        <div class="invisible">none</div>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </div>
    </nav>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      root: 'my-online-portfolio',
      data: 0,
      value: 2013
    }
  },
  computed: {
    channels() {
      if (this.data) {
        return this.data.contents.filter(item => item.base_class === 'Channel');
      } else {
        return null
      }
    },
    range() {
      if (this.channels.length) {
        return [parseInt(this.channels[0].title), parseInt(this.channels[this.channels.length - 1].title), parseInt(this.channels[this.channels.length - 1].title) - parseInt(this.channels[0].title) + 1]
      } else {
        return null
      }
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
    this.fetchData(this.root)
  }
}
</script>

<style lang="scss" scoped>
  #datalist {
    position:relative;
  	display: flex;
  	justify-content: space-between;
    @apply pointer-events-none;
    option {
      @apply -mt-0.5 transform rotate-180 -translate-y-6 p-0.5;
    }

  }
</style>

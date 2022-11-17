<template>
  <div page-home v-if="data" class="bg-gray-200 p-5 space-y-5">

    <BasicText v-for="block in data.filter(item => item.class === 'Text')" :text="block.content_html" :key="block.id" class=""/>

    <div v-if="channels && projects && channels.length === projects.length" class="flex items-start gap-5">
      <SnippetProject v-for="project in projects" :key="project.content.slug" :project="project" class="w-1/4 flex-shrink-0 sticky top-5"/>
    </div>
  </div>
  <div v-else>loading</div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      root: 'my-online-portfolio',
      data: null,
      projects: [],
      loading: true
    }
  },
  watch: {
    channels() {
      console.log(this.channels)
      for (const channel of this.channels) {
        this.fetchChannel(channel)
      }
    }
  },
  computed: {
    channels() {
      if (this.data) {
        return this.data.filter(item => item.base_class === 'Channel');
      } else {
        return null
      }
    }
  },
  methods: {
    fetchChannels(channelString) {
      this.error = null
      axios
        .get(`https://api.are.na/v2/channels/${channelString}`)
        .then((response) => {
          if (response) {
            this.data = response.data.contents
          } else {
            console.log('error')
          }
      })
    },
    fetchChannel(channel) {
      this.error = null
      axios
        .get(`https://api.are.na/v2/channels/${channel.slug}`)
        .then((response) => {
          if (response) {
            this.projects.push({meta: channel, content: response.data.contents})
            console.log(response.data.contents)
          } else {
            console.log('error')
          }
      })
    },
  },
  mounted() {
    console.log('MOUNTED')
    this.fetchChannels(this.root)
  }
}
</script>

<style lang="scss" scoped>

</style>

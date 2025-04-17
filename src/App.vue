<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import TextBlock from './components/TextBlock.vue';
import ImageBlock from './components/ImageBlock.vue';
import ImageThumbBlock from './components/ImageThumbBlock.vue';

const channels = [
  { id: 'about', name: 'about' },
  { id: 'projects-wi_m0hdcafk', name: 'projects' },
  { id: 'code-exrxeixgkpa', name: 'code' },
];

const currentChannelIndex = ref(1);
const currentSubchannelIndex = ref(0);
const currentContentIndex = ref('0');

const channelData = ref({});
const subchannelData = ref({});
const loading = ref(true);

// Reset subchannel & content index when switching channels
watch(currentChannelIndex, () => {
  currentSubchannelIndex.value = 0;
  currentContentIndex.value = 0;
});

watch(currentSubchannelIndex, () => {
  currentContentIndex.value = 0;
});
const currentChannel = computed(() => channels[currentChannelIndex.value].id);

const subchannels = computed(() => {
  const channelId = currentChannel.value;
  const contents = channelData.value[channelId]?.contents || [];

  if (channelId === 'code-exrxeixgkpa') {
    return contents.filter(
      (item) => item.base_class === 'Block' && item.class === 'Link'
    );
  }

  return contents
    .filter((item) => item.base_class === 'Channel')
    .filter((item) => {
      const sub = subchannelData.value[item.id];
      return !loading.value && sub && sub.contents && sub.contents.length > 0;
    });
});

const selectedSubchannelId = computed(
  () => subchannels.value[currentSubchannelIndex.value]?.id
);

const subchannelContents = computed(() => {
  return subchannelData.value[selectedSubchannelId.value]?.contents || [];
});

const textBlocks = computed(() =>
  subchannelContents.value.filter((item) => item.class === 'Text')
);
const images = computed(() =>
  subchannelContents.value.filter((item) => item.class === 'Image')
);
const linkBlocks = computed(() =>
  subchannelContents.value.filter((item) => item.class === 'Link')
);

const fetchInitialData = async () => {
  loading.value = true;
  try {
    const realChannels = channels.filter((ch) => ch.id !== 'about');
    const channelResponses = await Promise.all(
      realChannels.map((ch) =>
        axios.get(`https://api.are.na/v2/channels/${ch.id}`)
      )
    );

    channelResponses.forEach((res, i) => {
      channelData.value[realChannels[i].id] = res.data;
    });

    const subchannelIds = [];
    channelResponses.forEach((res) => {
      res.data.contents.forEach((item) => {
        if (item.base_class === 'Channel') {
          subchannelIds.push(item.id);
        }
      });
    });

    const subchannelResponses = await Promise.all(
      subchannelIds.map((id) =>
        axios.get(`https://api.are.na/v2/channels/${id}`)
      )
    );

    subchannelResponses.forEach((res) => {
      subchannelData.value[res.data.id] = res.data;
    });
  } catch (err) {
    console.error('Fetch error:', err);
  }
  loading.value = false;
};

onMounted(() => fetchInitialData());
</script>

<template>
  <div class="min-h-frame-h flex flex-col text-lg leading-tight">
    <!-- Sliders Overlay -->
    <div class="fixed h-frame-h w-frame-w shadow-lg z-10 pointer-events-none">
      <!-- Channel Selector -->
      <div class="absolute w-full bottom-0 p-5 pb-3">
        <input
          type="range"
          v-model="currentChannelIndex"
          :min="0"
          :max="channels.length - 1"
          step="1"
          class="w-full"
        />
        <div class="flex justify-between -mt-2 text-xs">
          <span v-for="channel in channels" :key="channel.id">{{
            channel.name
          }}</span>
        </div>
      </div>

      <!-- Subchannel Selector -->
      <div
        class="w-frame-h absolute bottom-0 left-1/2 ml-2 sm:ml-0 sm:left-8 translate-y-full -translate-x-4 z-50"
      >
        <div class="w-frame-h transform -rotate-90 origin-top-left pl-16 pr-6">
          <input
            type="range"
            v-model="currentSubchannelIndex"
            :min="0"
            :max="Math.max(subchannels.length - 1, 0)"
            step="1"
            class="w-full"
            :disabled="
              subchannels.length <= 1 ||
              currentChannel !== 'projects-wi_m0hdcafk'
            "
            :class="{
              'opacity-20 cursor-not-allowed':
                subchannels.length <= 1 ||
                currentChannel !== 'projects-wi_m0hdcafk',
            }"
          />
          <div class="flex justify-between -mt-2 text-xs pl-2">
            <span
              v-for="(_, index) in subchannels.length || 1"
              :key="index"
              class="transform rotate-90"
              >-</span
            >
          </div>
        </div>

        <!-- Content Slider -->
        <div
          class="absolute bottom-8 w-[40vw] sm:w-[66vw] transform -rotate-45 origin-top-left pl-10"
        >
          <input
            type="range"
            v-model="currentContentIndex"
            :min="0"
            :max="images.length + 1"
            step="1"
            class="w-full h-2 rounded-lg appearance-none"
            :disabled="
              currentChannel !== 'projects-wi_m0hdcafk' ||
              (images.length === 0 && textBlocks.length === 0)
            "
            :class="{
              'opacity-20 cursor-not-allowed':
                currentChannel !== 'projects-wi_m0hdcafk' ||
                (images.length === 0 && textBlocks.length === 0),
            }"
          />
          <div class="flex justify-between -mt-2 text-xs pl-2 h-4">
            <span
              v-for="(_, index) in images.length + 2"
              :key="index"
              class="transform rotate-90"
              >-</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="grid grid-cols-2 gap-16 p-6 pb-16 sm:grid-cols-1 sm:pl-14">
      <div>
        <!-- About View -->
        <div v-if="currentChannel === 'about'">
          Karen Czock <br />developer, designer<br />
          <a href="mailto:karen.czock@posteo.de" class="underline"
            >karen.czock@posteo.de</a
          ><br /><br />
        </div>

        <!-- Projects View -->
        <template v-else-if="currentChannel === 'projects-wi_m0hdcafk'">
          <template
            v-if="currentContentIndex === 0 || currentContentIndex === '0'"
          >
            <div
              :class="[
                'grid gap-2 mb-6',
                images.length > 3 ? 'grid-cols-3' : 'grid-cols-2',
              ]"
            >
              <ImageThumbBlock
                v-for="(img, i) in images"
                :key="img.id"
                :content="img"
                class="max-h-[40vh] overflow-hidden object-contain"
              />
            </div>
          </template>

          <template v-else-if="currentContentIndex === '1'">
            <div>
              <TextBlock
                v-for="block in textBlocks"
                :key="block.id"
                :content="block"
              />
              <!-- Simple list of links for projects -->
              <div v-if="linkBlocks.length > 0" class="mt-4">
                <ul class="space-y-2">
                  <li v-for="block in linkBlocks" :key="block.id">
                    <a
                      :href="block.source?.url || '#'"
                      target="_blank"
                      class="underline"
                    >
                      {{ block.source.url }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </template>

          <template v-else>
            <div
              v-if="images[Number(currentContentIndex) - 2]"
              class="w-full h-[calc(100dvh-6rem)]"
            >
              <ImageBlock
                :content="images[Number(currentContentIndex) - 2]"
                class="object-contain max-h-[66%] overflow-hidden"
              />
            </div>
          </template>
        </template>

        <!-- Code View -->
        <div v-else-if="currentChannel === 'code-exrxeixgkpa'">
          <!-- Simple list of links for code -->
          <div v-if="subchannels.length > 0" class="">
            <ul class="space-y-2">
              <li v-for="(link, index) in subchannels" :key="link.id">
                <a
                  :href="link.source?.url || '#'"
                  target="_blank"
                  class="underline"
                >
                  {{ link.source.url || 'Link ' + (index + 1) }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

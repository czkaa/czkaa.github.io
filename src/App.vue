<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import debounce from 'lodash.debounce';
import TextBlock from './components/TextBlock.vue';
import ImageBlock from './components/ImageBlock.vue';
import LinkBlock from './components/LinkBlock.vue';
import ImageThumbBlock from './components/ImageThumbBlock.vue';

const channels = [
  { id: 'about', name: 'about' },
  { id: 'projects-wi_m0hdcafk', name: 'projects' },
  { id: 'code-exrxeixgkpa', name: 'code' },
];

const currentChannelIndex = ref(1);
const currentSubchannelIndex = ref(0);
const currentContentIndex = ref(0); // 0 = thumbnails, 1 = text, 2+ = images

const debouncedSubchannelIndex = ref(currentSubchannelIndex.value);
const debouncedContentIndex = ref(currentContentIndex.value);

watch(
  currentSubchannelIndex,
  debounce((val) => {
    debouncedSubchannelIndex.value = val;
    currentContentIndex.value = 0;
    debouncedContentIndex.value = 0;
  }, 150)
);

watch(
  currentContentIndex,
  debounce((val) => {
    debouncedContentIndex.value = parseInt(val);
  }, 150)
);

const channelData = ref({});
const subchannelData = ref({});
const loading = ref(true);

const currentChannel = computed(() => channels[currentChannelIndex.value].id);

const subchannels = computed(() => {
  const channelId = currentChannel.value;
  if (!channelData.value[channelId]) return [];

  if (channelId === 'code-exrxeixgkpa') {
    return channelData.value[channelId].contents
      .filter((item) => item.base_class === 'Block' && item.class === 'Link')
      .map((item) => ({ id: item.id, title: item.title, content: item }));
  }

  return (
    channelData.value[channelId]?.contents?.filter(
      (item) => item.base_class === 'Channel'
    ) || []
  );
});

const selectedSubchannelId = computed(
  () => subchannels.value[debouncedSubchannelIndex.value]?.id
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

const fetchAllData = async () => {
  loading.value = true;
  try {
    const realChannels = channels.filter((ch) => ch.id !== 'about');
    const channelRequests = realChannels.map((ch) =>
      axios.get(`https://api.are.na/v2/channels/${ch.id}`)
    );
    const channelResponses = await Promise.all(channelRequests);
    channelResponses.forEach((res, i) => {
      channelData.value[realChannels[i].id] = res.data;
    });

    const subchannelRequests = [];

    // Collect all subchannels across all channels
    channelResponses.forEach((response) => {
      response.data.contents.forEach((item) => {
        if (item.base_class === 'Channel') {
          subchannelRequests.push(
            axios.get(`https://api.are.na/v2/channels/${item.id}`)
          );
        }
      });
    });

    // 👉 Additionally collect ALL subchannels from "projects" channel and fetch them
    const projectSubchannels =
      channelData.value['projects-wi_m0hdcafk']?.contents?.filter(
        (item) => item.base_class === 'Channel'
      ) || [];

    projectSubchannels.forEach((item) => {
      subchannelRequests.push(
        axios.get(`https://api.are.na/v2/channels/${item.id}`)
      );
    });

    const subchannelResponses = await Promise.all(subchannelRequests);

    subchannelResponses.forEach((res) => {
      subchannelData.value[res.data.id] = res.data;
    });
  } catch (err) {
    console.error('Fetch error:', err);
  }
  loading.value = false;
};

onMounted(() => fetchAllData());
</script>

<template>
  <div class="min-h-frame-h flex flex-col">
    <!-- Sliders Overlay -->
    <div class="fixed h-frame-h w-frame-w shadow-lg z-10 pointer-events-none">
      <!-- Channel Selector (Always visible) -->
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
          <span v-for="channel in channels" :key="channel.id">
            {{ channel.name }}
          </span>
        </div>
      </div>

      <!-- Subchannel Selector (Always visible, conditionally enabled) -->
      <div
        class="w-frame-h absolute bottom-0 left-1/2 sm:left-8 translate-y-full -translate-x-4 z-50"
      >
        <div class="w-frame-h transform -rotate-90 origin-top-left pl-16 pr-6">
          <input
            type="range"
            v-model="currentSubchannelIndex"
            :min="0"
            :max="Math.max(subchannels.length - 1, 0)"
            step="1"
            class="w-full"
            :disabled="subchannels.length <= 1 || currentChannel === 'about'"
            :class="{
              'opacity-20 cursor-not-allowed':
                subchannels.length <= 1 || currentChannel === 'about',
            }"
          />
          <div
            class="flex justify-between -mt-2 text-xs pl-2"
            v-show="subchannels.length > 1 || currentChannel !== 'about'"
          >
            <span
              v-for="(_, index) in subchannels.length || 1"
              :key="index"
              class="transform rotate-90"
            >
              -
            </span>
          </div>
        </div>

        <!-- Content Slider (Always visible, enabled only for projects) -->
        <div
          class="absolute bottom-9 w-[40vw] sm:w-[66vw] transform -rotate-45 origin-top-left pl-10"
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
          <div
            class="flex justify-between -mt-2 text-xs pl-2 h-4"
            v-show="currentChannel === 'projects-wi_m0hdcafk'"
          >
            <span
              v-for="(_, index) in images.length + 2"
              :key="index"
              class="transform rotate-90"
            >
              -
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="grid grid-cols-2 gap-16 p-6 pb-16 sm:grid-cols-1 sm:pl-14">
      <!-- Left Side -->
      <div class="">
        <!-- About View -->
        <div v-if="currentChannel === 'about'">
          Karen Czock <br />
          developer, designer<br />
          <a href="mailto:karen.czock@posteo.de" class="underline"
            >karen.czock@postoe.de</a
          ><br /><br />
        </div>

        <!-- Projects View -->
        <template v-else-if="currentChannel === 'projects-wi_m0hdcafk'">
          <template v-if="debouncedContentIndex === 0">
            <!-- Thumbnails -->
            <div
              :class="[
                'grid  gap-2 mb-6',
                images.length > 2 ? 'grid-cols-3' : 'grid-cols-2',
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

          <template v-else-if="debouncedContentIndex === 1">
            <!-- Text Blocks + Link Blocks -->
            <div>
              <TextBlock
                v-for="block in textBlocks"
                :key="block.id"
                :content="block"
              />

              <div v-if="linkBlocks.length > 0" class="mt-4 space-y-2">
                <LinkBlock
                  v-for="block in linkBlocks"
                  :key="block.id"
                  :content="block"
                />
              </div>
            </div>
          </template>

          <template v-else>
            <!-- Individual Image -->
            <div
              v-if="images[debouncedContentIndex - 2]"
              class="w-full h-[calc(100dvh-6rem)]"
            >
              <ImageBlock
                :content="images[debouncedContentIndex - 2]"
                class="object-contain max-h-full overflow-hidden"
              />
            </div>
          </template>
        </template>

        <!-- Code View (links based on subchannel slider) -->
        <div v-else-if="currentChannel === 'code-exrxeixgkpa'">
          <div v-if="subchannels.length > 0" class="-mt-2">
            <LinkBlock
              :content="subchannels[debouncedSubchannelIndex]?.content"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

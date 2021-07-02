<template>
  <div class="h-64 py-40 mb-5 md:py-48 md:mb-0">
    <div
      class="absolute left-0 top-0 right-0 mt-8 md:mt-10 h-full w-full flex items-center justify-center bg-black"
      style="max-height: 400px;"
    >
      <client-only>
        <video-background
          src="/media/video/mgb-teaser-1080p-neu.mp4"
          :sources="[
            {src: '/media/video/mgb-teaser-540p-neu.mp4', res: 1080, autoplay: true}
          ]"
          class="flex opacity-50 h-full w-full"
        />
      </client-only>
      <!-- <logo class="absolute w-auto lg:w-auto h-48 max-w-full px-12" /> -->
      <HLine class="absolute text-gray-800 -mt-6 h-6 bottom-0 transform scale-y-[-100%] w-screen" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import HLine from '~/components/HLine'

export default {
  components: {
    HLine,
    Logo,
  },
}
</script>

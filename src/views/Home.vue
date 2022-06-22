<template>
  <h1>
    Welcome, here are trending in gif's world
  </h1>
  <gif-list
    :gifs="trending"
  />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import GifList from '@/components/GifList.vue'

export default {
  components: {
    GifList,
  },

  setup () {
    const store = useStore()
    const trending = computed(() => store.getters['gifs/getTrending'])

    if (!trending.value.length) {
      store.dispatch('gifs/fetchTrending')
    }

    return {
      trending,
    }
  }
}
</script>

<template>
  <div
    class="about"
  >
    <h1
      v-text="`Search${searchTerm ? ': ' + searchTerm : ''}`"
    />
    <gif-list
      v-if="isVisibleContent"
      :gifs="getSearchResults"
    />
    <p
      v-else
      v-text="'&#8673;&#8673;&#8673; Find any gif you want &#8673;&#8673;&#8673;'"
      class="text"
    />
  </div>
</template>

<script>
import { appConfig } from '@/config/appConfig'
import { mapActions, mapGetters } from 'vuex'
import GifList from '@/components/GifList.vue'

export default {
  components: {
    GifList,
  },

  computed: {
    ...mapGetters('gifs', [
      'getSearchResults'
    ]),
    searchTerm () {
      return this.$route.query.q
    },
    isVisibleContent () {
      return this.searchTerm?.length >= appConfig.search.minLength
    },
  },

  watch: {
    searchTerm: {
      handler: 'fetchPageByQuery',
      immediate: true,
    },
  },

  methods: {
    ...mapActions('gifs', [
      'fetchSearchResults',
    ]),

    fetchPageByQuery () {
      if (this.isVisibleContent) {
        this.fetchSearchResults(this.searchTerm)
      }
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 20px;
  text-align: center;
  margin: var(--base-space);
}
</style>

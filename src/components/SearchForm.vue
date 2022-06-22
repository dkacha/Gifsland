<template>
  <form
    :action="$router.resolve({ name: 'search' }).href"
    @submit.prevent
  >
    <input
      placeholder="You can search the best gifs"
      name="q"
      v-model="searchTerm"
      class="input"
    >
  </form>
</template>

<script>
import { appConfig } from '@/config/appConfig'
import debounce from 'lodash/debounce'

export default {
  computed: {
    searchTerm: {
      get () {
        return this.$route.query.q
      },
      set (newValue) {
        this.submitForm(newValue)
      },
    },
  },

  methods: {
    submitForm: debounce(function (newValue) {
      if (appConfig.search.minLength <= newValue?.length) {
        this.$router.push({ name: 'search', query: { q: newValue } })
      }
    }, appConfig.search.debounceTime),
  },
}
</script>

<style scoped>
.input {
  border: 1px solid var(--base-color);
  height: 50px;
  width: 100%;
  border-radius: calc(var(--base-radius) * 0.5);
  padding: calc(var(--base-space) * 0.5);
  font-size: 20px;
  color: var(--base-color);
}
</style>

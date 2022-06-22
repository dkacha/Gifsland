import { apiTenorGetSearch } from '@/services/API/Tenor/search'
import { apiTenorGetTrending } from '@/services/API/Tenor/trends'
import { mapGifs } from '@/services/gif'

const apiCalls = {
  apiTenorGetTrending,
  apiTenorGetSearch,
}

export default {
  namespaced: true,
  state: {
    search_results: [],
    trending: [],
  },
  getters: {
    getSearchResults (state) {
      return state.search_results
    },
    getTrending (state) {
      return state.trending
    },
  },
  mutations: {
    SET_SEARCH_RESULTS (state, searchResults) {
      state.search_results = searchResults
    },
    SET_TRENDING (state, trending) {
      state.trending = trending
    },
  },
  actions: {
    async fetchData ({ commit, dispatch }, { apiAction, searchTerm, processDataTo }) {
      try {
        const { results } = await (apiCalls[apiAction](searchTerm || undefined)).fetch()
        commit(processDataTo, mapGifs(results))
      }
      catch (e) {
        console.error(e)
      }
    },
    async fetchSearchResults ({ dispatch }, searchTerm) {
      dispatch('fetchData', {
        apiAction: 'apiTenorGetSearch',
        processDataTo: 'SET_SEARCH_RESULTS',
        searchTerm,
      })
    },
    async fetchTrending ({ dispatch }, searchTerm) {
      dispatch('fetchData', {
        apiAction: 'apiTenorGetTrending',
        processDataTo: 'SET_TRENDING',
      })
    },
  },
}

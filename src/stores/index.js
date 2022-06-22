import { createStore } from 'vuex'
import gifs from './modules/gifs'

export default createStore({
  modules: {
    gifs,
  },
})

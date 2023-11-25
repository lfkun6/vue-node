import {createStore} from 'vuex'

const store = createStore({
    state () {
        return {
          token : null
        }
      },
      mutations: {
        increment (state) {
          state.token = 1
        },
        remove (state) {
            state.token = null
        }
      }
})

export default store
import { defineStore } from "pinia"

export const useCounterStore = defineStore({
  id: "app",
  state: () => ({
    count: 0,
    firstLetter: "e",
    lastLetter: "o"
  }),
  getters: {
    letter(state) {
      return state.firstLetter + state.lastLetter
    }
  },
  actions: {
    increment(value: number) {
      this.count += value
    },
    async asyncIncrement(value: number) {
      setTimeout(() => {
        this.count += value
      }, 1000)
    }
  }
})

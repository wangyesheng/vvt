import { defineStore } from "pinia"

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    count: 0
  })
})

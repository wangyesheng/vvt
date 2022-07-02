import { defineComponent, ref, computed, watchEffect, useCssModule } from "vue"
import { useCounterStore } from "@/store"

import style from "./Counter.module.css"

export default defineComponent({
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const onIncrement = () => count.value++

    const couterStore = useCounterStore()
    const onPatch = () =>
      couterStore.$patch({
        count: couterStore.count + 1
      })

    const onChangeLetter = () =>
      couterStore.$patch({
        firstLetter: couterStore.firstLetter.toUpperCase(),
        lastLetter: couterStore.lastLetter.toUpperCase()
      })

    watchEffect(() => {
      console.log(couterStore.count)
    })

    return () => {
      return (
        <div class={style["count-wrap"]}>
          <h1 class={style.success}>Counter</h1>
          <h3>{count.value}</h3>
          <h3>{doubleCount.value}</h3>
          <h3>{couterStore.count}</h3>
          <h3>{couterStore.letter}</h3>
          <button onClick={onIncrement}> Increment </button>
          <button onClick={() => couterStore.count++}>
            Change store count directly
          </button>
          <button onClick={onPatch}>Change store count by $patch</button>
          <button onClick={() => couterStore.increment(2)}>
            Change store count by action
          </button>
          <button onClick={() => couterStore.asyncIncrement(1)}>
            Change store count by async action
          </button>
          <button onClick={onChangeLetter}>Change store letter</button>
        </div>
      )
    }
  }
})

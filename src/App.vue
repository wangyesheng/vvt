<template>
  <h1>App</h1>
  <Hello :word="word" />
  <button @click="onClick">Click</button>

  <Counter />
</template>

<script lang="ts" setup>
import Hello from "@/components/Hello.vue"
import Counter from "@/components/Counter"
import { ref } from "vue"

const word = ref("hello world")
const onClick = () => {
  word.value = word.value.toUpperCase()
}
</script>

<style lang="scss" scoped>
h1 {
  color: $default;
}
</style>

<template>
  <div :class="$style['todo-item']">
    <img src="@/assets/imgs/n.png" alt="" />
    <span>{{ source.label }}</span>
    <span>{{ todoStore.count }}</span>
    <span @click="todoStore.count++">+</span>
  </div>
</template>

<script setup lang="ts">
import { TodoItemSource } from "./typings"
import { useTodoStore } from "@/store"

const todoStore = useTodoStore()

defineProps<{ source: TodoItemSource }>()
</script>

<style lang="scss" module scope>
.todo-item {
  border: 1px dashed #1890cc;
  padding: 5px;
  transform: rotate(-10deg);
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  img {
    width: 20px;
    height: 20px;
    vertical-align: bottom;
  }
  span {
    margin-left: 5px;
    color: rgb(68, 238, 181);
  }
}
</style>

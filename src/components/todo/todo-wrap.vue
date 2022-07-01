<template>
  <div class="todo-wrap">
    <todo-item v-for="n in 5" :key="n" :source="itemData"></todo-item>
  </div>
</template>

<script setup lang="ts">
import TodoItem from "./todo-item.vue"
import { TodoItemSource } from "./typings"
const itemData: TodoItemSource = {
  id: Math.random(),
  label: String(Math.random())
}
</script>

<style lang="scss" scope>
.todo-wrap {
  width: 500px;
  height: 50vh;
  margin: 50px auto;
  background: #f5f5f5;
  padding: 20px;
}
</style>

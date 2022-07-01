<template>
  <div>
    <h1>{{ msg }}</h1>
    <a href="#" :class="$style.link">to</a>
    <a href="#" :class="style.skip">skip</a>
    <img src="../assets/imgs/n.png" alt="" />
    <img src="@/assets/imgs/n.png" alt="" />
    <img :src="notify" alt="" />
    <div class="img"></div>
  </div>
</template>

<script setup lang="ts">
import style from "./HelloWorld.module.css"
import notify from "../assets/imgs/n.png"
defineProps<{ msg: string }>()
</script>

<style module scoped>
div {
  color: #ff0000;
}

.link {
  color: #1890ff;
}
</style>

<style>
.img {
  width: 128px;
  height: 128px;
  display: inline-block;
  background: url(@/assets/imgs/n.png);
  background-size: 100% 100%;
}
</style>

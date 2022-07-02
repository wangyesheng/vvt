<template>
  <div :class="$style['danger']">{{ word }}</div>
  <div :class="[cssModule.warning]">{{ word }}</div>
  <div :class="style.success">{{ word }}</div>
  <div :id="cssModule.wrap">{{ word }}</div>
  <img src="../assets/imgs/icon.png" alt="" />
  <img :src="icon" alt="" />
  <div :class="style.iconBg"></div>
</template>

<script setup lang="ts">
import { useCssModule } from "vue"

import style from "./Hello.module.css"
import icon from "@/assets/imgs/icon.png"

defineProps<{ word: string }>()
const cssModule = useCssModule()
</script>

<style lang="scss" module>
.danger {
  color: $danger;
}

.warning {
  color: $warning;
}

#wrap {
  width: 100px;
  height: 100px;
  border: 1px solid #eb8b5d;
  transform: rotate(30deg);
  display: inline-block;
}
</style>

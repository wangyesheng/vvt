<template>
  <div class="title">
    <a href="#">link to title</a>
    <a class="postcss" href="#"></a>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
$color: #000;
$size: 18px;
.title {
  a {
    color: $themeColor;
    font-size: $size;
  }
  .postcss {
    height: 30px;
    width: 60px;
    background-color: rgb(224, 221, 48);
    display: inline-block;
    transform: rotate(30deg);
  }
}
</style>

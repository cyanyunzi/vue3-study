<template>
  <Child style="color: cornflowerblue;font-size: 20px"></Child>
  <p>父节点引入子组件，在组件上定义样式，如何和子组件定义相同的样式，父优先级高</p>
</template>

<script setup>
import Child from "./child.vue";

</script>

<style scoped>

</style>
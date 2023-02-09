<template>
  <div :style="color">aaa</div>
</template>

<script setup lang="ts">

import {reactive} from "vue";

const color = reactive({color: "red"});

</script>

<style scoped>

</style>
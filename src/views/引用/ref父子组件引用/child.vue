<template>
  <button  @click='count=count+1'>子节点：{{count}}</button>
</template>

<script setup lang="ts">

import {onMounted, onUpdated, ref} from "vue";

const count = ref(0);

defineExpose({count});
</script>

<style scoped>

</style>
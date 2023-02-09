<template>
  <button ref="buttonRef" @click='count=count+1'>点击我：{{count}}</button>
</template>

<script setup lang="ts">

import {onMounted, onUpdated, ref} from "vue";

const buttonRef = ref(null);
const count = ref(0);

onMounted(() => {
  console.log(`onMounted:${buttonRef.value}`);
});

onUpdated(() => {
  console.log(`onUpdated:${buttonRef.value}`);
});

</script>

<style scoped>

</style>
<template>
  <Child ref="childRef"></Child>

  <button @click="add()">父节add</button>
</template>

<script setup lang="ts">

import {ref} from "vue";
import type Child from "@/views/引用/ref父子组件引用/child.vue";

const childRef = ref<InstanceType<typeof Child> | null>(null);

function add() {
  childRef.value.count = 20;
}
</script>

<style scoped>

</style>
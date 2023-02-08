<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Left from "@/views/layout/left.vue";
import Right from "@/views/layout/right.vue";
</script>

<template>

  <el-container>
    <el-aside width="15%">
      <Left></Left>
    </el-aside>
    <el-main>
      <Right></Right>
    </el-main>
  </el-container>

</template>

<style scoped>



</style>

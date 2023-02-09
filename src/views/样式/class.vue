<template>
  <div
      class="static"
      :class="{ success: isSuccess, error: isError }"
  >aaa
  </div>
  <el-divider/>
  <button @click="isError=true,isSuccess=false">切换error</button>
  <button @click="isError=false,isSuccess=true">切换success</button>
</template>

<script setup lang="ts">

import {reactive, ref} from "vue";

const isSuccess = ref(false)
const isError = ref(false)

</script>

<style scoped>
.error {
  background-color: red;
}

.success {
  background-color: cornflowerblue;
}
</style>
<template>
  <p>v-model.lazy：输入框内内容输入完毕，回车或鼠标失焦，才会更新数据绑定</p>
  <input v-model.lazy="msg1" /><span>{{msg1}}</span>
  <el-divider/>

  <p>v-model：输入框内容实时更新绑定</p>
  <input v-model="msg2" /><span>{{msg2}}</span>
  <el-divider/>

  <p>v-model.number：没看出什么用</p>
  <input v-model.number="num" /><span>{{num}}</span>
  <el-divider/>

  <p>v-model.trim：俩端去空</p>
  <input v-model.trim="trim" /><span>{{trim}}</span>
  <el-divider/>
</template>

<script setup lang="ts">

import {ref} from "vue";

const msg1 = ref("");
const msg2 = ref("");
const num = ref(0);
const trim = ref("");

</script>

<style scoped>

</style>
<template>
  <h1>对象</h1>
  <div>{{obj.title}}</div>
  <div>{{obj.num}}</div>

  <h1>数组</h1>
  <div>{{arr.toLocaleString()}}</div>

</template>

<script setup lang="ts">
import {reactive} from "vue";

interface Model{
  title: string;
  num: number;
}

const obj = reactive({title:"呵呵",num:1});
obj.num = 2;

const arr = reactive([1,2,3]);
arr.push(4);


</script>

<style scoped>
p{
  word-break:break-word
}
</style>
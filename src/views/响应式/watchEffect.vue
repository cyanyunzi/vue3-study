<template>
  <div>{{param.age}}</div>
  <button @click="param.age=param.age+1">点击修改年龄</button>
  <button @click="param.name=param.name+param.age">点击修改名字</button>
</template>

<script setup lang="ts">

import {reactive, watchEffect} from "vue";

interface Obj {
  name: string;
  age: number;
}
const param = reactive({name:"翠花", age: 11})

watchEffect(() => {
  console.log("进入单字段")
  alert(param.age);

});
watchEffect(() => {
  console.log("进入双字段")
  alert(param.name);
  alert(param.age);
});


</script>

<style scoped>

</style>
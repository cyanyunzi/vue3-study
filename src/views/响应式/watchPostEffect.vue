<template>
  <h1>先更新在执行监听</h1>
  <div>{{allFieldObj.name}}:{{allFieldObj.age}}</div>
  <button @click="allFieldObj.age=allFieldObj.age+1,allFieldObj.name=allFieldObj.name+allFieldObj.age">add</button>
</template>

<script setup lang="ts">

import {reactive,  watchPostEffect} from "vue";

interface AllFieldObj{
  name: string;
  age: number;
}
const allFieldObj = reactive({name:"aa",age:10});
watchPostEffect(() => {
  alert(`${allFieldObj.name} : ${allFieldObj.age}`);
});

</script>

<style scoped>

</style>
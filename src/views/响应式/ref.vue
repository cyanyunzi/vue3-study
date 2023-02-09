<template>
  <h1>string</h1>
  <div>{{str}}</div>

  <h1>number</h1>
  <div>{{num}}</div>

  <h1>boolean</h1>
  <div>{{bool}}</div>

  <h1>ref作为对象字段，不丢失响应</h1>
  <div>名称：{{obj.title}},数量：{{obj.num}}</div>
  <button @click="buttonClick">点击我,传递ref对象到方法</button>

</template>

<script setup lang="ts">
import {reactive, Ref, ref} from "vue";


const num = ref(1);
const str = ref("我是字符串");
const bool = ref(false);

let obj = {
  title:ref("红楼梦"),
  num:ref(1),
}

function buttonClick(){
  updateRefTitle(obj.title);
  updateRefNum(obj.num);
}

function updateRefTitle(ref:Ref<string>){
  ref.value = "西游记"
}

function updateRefNum(ref:Ref<number>){
  ref.value = 20
}


</script>

<style scoped>
</style>
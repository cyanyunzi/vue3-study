<template>
  <h1 style="color: red">1个数据需要多个数据聚合使用computed</h1>

  <h1>computed监听元素变化</h1>
  <button @click="add(arr1)">点击我添加数组1元素</button>
  <div>{{ arr1Str }}</div>

  <el-divider/>


  <h1>computed多个监听元素变化</h1>
  <button @click="add(arr2)">点击我添加数组2元素</button>
  <button @click="add(arr3)">点击我添加数组3元素</button>
  <p>{{ arrMultipleStr}}</p>

  <button @click="showComputed=!showComputed">点击展示计算缓存</button>
  <p v-if="showComputed">{{ arrMultipleStr}}</p>


  <el-divider/>

  <h1>方法没有computed的缓存</h1>
  <button @click="add(arr4)">点击我添加数组4元素</button>
  <button @click="add(arr5)">点击我添加数组5元素</button>
  <button @click="showMsgFlag=!showMsgFlag">点击展示</button>
  <p v-if="showMsgFlag">{{ showMsg() }}</p>

</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue";

const arr1 = reactive(new Array<number>());
const arr1Str = computed(() => {
  console.log("单个响应式对象进入了computed...")
  return arr1.length > 0 ? arr1.toLocaleString() : "";
});

function add(arr: Array<number>) {
  arr.push(Math.floor(Math.random() * 10));
}


const showComputed = ref(false);
const arr2 = reactive(new Array<number>());
const arr3 = reactive(new Array<number>());

const arrMultipleStr = computed(() => {
  console.log("多个响应式对象进入了computed...");
  let arr2Str = arr2.length > 0 ? arr2.toLocaleString() : "";
  let arr3Str = arr3.length > 0 ? arr3.toLocaleString() : "";
  return `数组2:${arr2Str}  数组3:${arr3Str}`;
});


const showMsgFlag = ref(false);
const arr4 = reactive(new Array<number>());
const arr5 = reactive(new Array<number>());
function showMsg(){
  console.log("进入了方法");
  let arr4Str = arr4.length > 0 ? arr4.toLocaleString() : "";
  let arr5Str = arr5.length > 0 ? arr5.toLocaleString() : "";
  return `数组4:${arr4Str}  数组5:${arr5Str}`;
}



</script>

<style scoped>
</style>
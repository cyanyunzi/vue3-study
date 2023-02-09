<template>
  <h1 style="color:red;">1个数据影响多个数据使用watch</h1>


  <div>param1: {{ param1 }}</div>
  <button @click="param1=param1+1">param1 add</button>

  <el-divider/>

  <div>watch getter函数调用</div>
  <button @click="x=x+1">x add</button>

  <el-divider/>

  <div>watch 多个监听数据</div>
  <button @click="xx=xx+1">x add</button>

  <el-divider/>


  <div>watch 监听对象属性</div>
  <button @click="obj.age=obj.age+10">x add</button>

  <el-divider/>

  <div>watch 所有属性监听对象属性,newVal和oldVal是同一个对象</div>
  <button @click='allFieldObj.age=allFieldObj.age+10,allFieldObj.name=allFieldObj.name+"翠花"'>x add</button>

  <el-divider/>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import {instances} from "element-plus/es/components/message/src/instance";

const param1 = ref(0);

watch(param1, (newVal, oldVal) => {
  alert(`param2新值：${newVal},旧值：${oldVal}`);
});

const x = ref(0);
const y = ref(2);
// getter 函数
watch(
    () => x.value + y.value,
    (sum) => {
      alert(`sum: ${sum} ,x:${x.value} y:${y.value}`)
    }
)


const xx = ref(0);
const yy = ref(2);
// 监听多个数据
watch(
    [xx,yy],
    (newVal,oldVal) => {
      alert(`newVal:${newVal},oldVal:${oldVal}`);
    }
)


const obj = reactive({name:"aa",age:11});
watch(() => obj.age, (newVal, oldVal) => {
  alert(`newVal:${newVal},oldVal:${oldVal}`);
});

interface AllFieldObj{
  name: string;
  age: number;
}
const allFieldObj = reactive({name:"aa",age:10});
watch(allFieldObj, (newVal:AllFieldObj, oldVal:AllFieldObj) => {
  alert(`newVal:${newVal.name} ${oldVal.name},oldVal:${newVal.age} ${oldVal.age}`);
});


</script>

<style scoped>

</style>
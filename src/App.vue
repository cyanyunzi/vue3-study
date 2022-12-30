<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div class="left">

    <h1>路由导航</h1>
    <nav>
      <div class="routerDiv"><RouterLink  to="/path/a">Path路径匹配名称</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/path/1">Path路径匹配数字</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/repeat">多重路径0-多个,路径0级</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/repeat/1">多重路径0-多个,路径1级</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/repeat/1/2">多重路径0-多个,路径2级</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/repeat/1">多重路径1-多个,路径1级</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/repeat/1/2">多重路径1-多个,路径2级</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/children/child1">父组件-嵌套路由1</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/children/child2">父组件-嵌套路由2</RouterLink></div>
      <div class="routerDiv"><RouterLink  to="/children/child3">父组件-嵌套路由3</RouterLink></div>




    </nav>



  </div>

  <div class="line"></div>

  <div class="right">
    <RouterView/>
  </div>
</template>

<style scoped>
.left {
  float: left;
  height: 100%;
  width: 30%;
}

.line {
  height: 100%;
  float: left;
  background-color: grey;
  width: 1%;
  padding-bottom: 100%;
}

.right {
  display: flex;
  width: 60%;
  float: left;
  height: 100%;
  padding-left: 10px;
}

.routerDiv{
  margin-top: 5px;
}





</style>

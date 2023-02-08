<template>
  <el-row class="tac">
    <el-col>
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">

          <template #title>
            <el-icon><location /></el-icon>
            <span>路由</span>
          </template>

          <el-sub-menu index="1-1">
            <template #title>路径匹配</template>
            <router-link to="/path/a">
              <el-menu-item index="1-1-1" >路径匹配名称</el-menu-item>
            </router-link>
            <router-link to="/path/1">
              <el-menu-item index="1-1-2" >路径匹配数字</el-menu-item>
            </router-link>
          </el-sub-menu>


          <el-sub-menu index="1-2">
            <template #title>多重路径</template>
            <router-link to="/repeat">
              <el-menu-item index="1-2-1" >路径0-多个,路径0级</el-menu-item>
            </router-link>
            <router-link to="/repeat/1">
              <el-menu-item index="1-2-2" >路径0-多个,路径0级</el-menu-item>
            </router-link>
            <router-link to="/repeat/1">
              <el-menu-item index="1-2-3" >路径1-多个,路径1级</el-menu-item>
            </router-link>
            <router-link to="/repeat/1/2">
              <el-menu-item index="1-2-4" >路径0-多个,路径2级</el-menu-item>
            </router-link>
            <router-link to="/repeat/1/2">
              <el-menu-item index="1-2-5" >路径1-多个,路径2级</el-menu-item>
            </router-link>
          </el-sub-menu>


          <el-sub-menu index="1-3">
            <template #title>嵌套路由</template>
            <router-link to="/children">
              <el-menu-item index="1-3-1" >父</el-menu-item>
            </router-link>
            <router-link to="/children/child1">
              <el-menu-item index="1-3-2" >子1</el-menu-item>
            </router-link>
            <router-link to="/children/child2">
              <el-menu-item index="1-3-3" >子2</el-menu-item>
            </router-link>
            <router-link to="/children/child3">
              <el-menu-item index="1-3-4" >子3</el-menu-item>
            </router-link>
          </el-sub-menu>

        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>事件</span>
          </template>


          <el-sub-menu index="2-1">
            <template #title>事件测试</template>
            <router-link to="/event/click">
              <el-menu-item index="2-1-1" to="/path/a">点击</el-menu-item>
            </router-link>
          </el-sub-menu>

        </el-sub-menu>

      </el-menu>
    </el-col>

  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
</script>

<style>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}


</style>
<template>
  这是父组件

  <el-divider />

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "parent"
}
</script>

<style scoped>

</style>
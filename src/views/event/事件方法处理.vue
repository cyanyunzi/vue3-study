<template>
  <button @click="myEvent">点击我</button>
</template>

<script setup lang="ts">

function myEvent(event:Event){
  alert(event.target.tagName)
}
</script>

<style scoped>

</style>
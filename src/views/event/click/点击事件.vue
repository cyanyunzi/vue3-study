<template>

  <button @click="clickButton">
    click me
  </button>

  <div>{{val}}</div>

</template>

<script setup>
import {ref} from 'vue'

const val = ref(0);

function clickButton(){
  val.value=val.value+1
}
</script>

<style scoped>

</style>
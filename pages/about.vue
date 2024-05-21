<script setup lang="ts">
import { useRoute } from 'vue-router';
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'

const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>

<template>
  <h1>ABOUT</h1>
  <fwb-dropdown text="Click me" placement="bottom">
    <fwb-list-group>
      <fwb-list-group-item>Item #1</fwb-list-group-item>
      <fwb-list-group-item>Item #2</fwb-list-group-item>
      <fwb-list-group-item>Item #3</fwb-list-group-item>
    </fwb-list-group>
  </fwb-dropdown>
</template>

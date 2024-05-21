<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const id = route.params.id;
</script>

<template>
  <h1>EDITOR {{ id }}</h1>
</template>
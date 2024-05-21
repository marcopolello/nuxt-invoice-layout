<template>
  <TiptapEditor :layout="layout" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import TiptapEditor from "./components/TiptapEditor.vue";
//TODO
//import TiptapEditor from "./components/TiptapEditor.vue";

const route = useRoute()

const props = defineProps({
  layout: {
    type: Object,
    required: true,
  },
});

const layout = props.layout;
</script>
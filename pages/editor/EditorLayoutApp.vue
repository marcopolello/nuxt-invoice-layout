<template>
  <TiptapEditor :layout="layout" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import TiptapEditor from "./components/TiptapEditor.vue";
import fattura from '../../html-fattura.json';

const route = useRoute()

//const props = defineProps({
//  layout: {
//    type: Object,
//    required: true,
//  },
//});

console.log(fattura);

const layout = fattura;
</script>
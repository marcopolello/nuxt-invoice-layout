<template>
  <Dialog title="Seleziona Immagine" :show="show" @close="closeDialog">
    <div v-bind="getRootProps()" class="p-4 border border-gray-300 rounded-lg">
      <input v-bind="getInputProps()" />
      <div
        v-if="imageListRef?.length > 0"
        class="grid grid-cols-3 gap-3 sm:grid-cols-4"
      >
        <button
          @click="insertImage(image.Url)"
          type="button"
          v-for="image in imageListRef"
          :key="image.Name"
          class="p-1 border border-gray-300 rounded-md"
        >
          <img
            alt=""
            :src="image.Url"
            class="object-scale-down object-center aspect-square"
          />
        </button>
      </div>
      <div
        :class="[
          isDragActive ? 'bg-gray-100' : '',
          imageListRef?.length > 0 ? 'mt-4 ' : '',
        ]"
        class="px-8 py-12 border border-gray-300 border-dashed rounded-lg"
      >
        <p
          v-if="isDragActive"
          class="text-sm font-medium text-center text-gray-700"
        >
          Drop the files here ...
        </p>
        <p v-else class="text-sm font-medium text-center text-gray-700">
          Drag 'n' drop some image file here, or click to select file
        </p>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useDropzone } from "vue3-dropzone"
import Dialog from "./Dialog.vue"
import axios from "axios"
import type ImageData from "../../../assets/js/models/image"

defineProps<{
  show: boolean
}>()
const emit = defineEmits<{
  (e: "close"): void
  (e: "insert", url: string): void
}>()

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  accept: "image/png,image/jpeg",
  multiple: false,
  onDrop: onDropImage,
  noClick: false,
})

const imageListRef = ref<ImageData[]>([])

function closeDialog() {
  emit("close")
}

function onDropImage(acceptedFiles: any[]) {
  if (acceptedFiles.length === 0) {
    return
  }

  const formData = new FormData()
  formData.append("file", acceptedFiles[0])

  //axios
  //  .post(route('upload.image'), formData, {
  //    headers: {
  //      "Content-type": "multipart/form-data",
  //    },
  //  })
  //  .then(() => {
  //    loadData()
  //  })
}

function loadData() {
  //axios.get(route('load.image'))
  //.then(response => {
  //  console.log(response);
  //  imageListRef.value = response.data;
  //})
  //.catch(error => {
  //  console.error(error);
  //});
}

function insertImage(url: string) {
  emit("insert", url)
  closeDialog()
}

onMounted(() => {
  loadData()
})
</script>

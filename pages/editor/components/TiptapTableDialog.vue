<template>
  <Dialog title="Aggiungi tabella" :show="show" @close="closeDialog">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col space-y-5">
        <div class="flex flex-row space-x-5">
          <InputContainer class="flex-1 w-full">
            <Label for="input-table-columns">Colonne</Label>
            <Input
              v-model="inputColumnsRef"
              id="input-table-columns"
              required
              type="number"
              min="1"
              class="w-full"
            />
          </InputContainer>
          <InputContainer class="flex-1 w-full">
            <Label for="input-table-rows">righe</Label>
            <Input
              v-model="inputRowsRef"
              id="input-table-rows"
              required
              type="number"
              min="1"
              class="w-full"
            />
          </InputContainer>
        </div>
        <SwitchGroup>
          <div class="flex flex-row items-center space-x-3">
            <Switch
              v-model="inputWithHeaderRef"
              :class="inputWithHeaderRef ? 'bg-blue-600' : 'bg-gray-200'"
              class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span
                :class="inputWithHeaderRef ? 'translate-x-6' : 'translate-x-1'"
                class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
              />
            </Switch>
            <SwitchLabel class="text-sm text-gray-600 select-none"
              >header tabella</SwitchLabel
            >
          </div>
        </SwitchGroup>
        <div class="flex flex-row justify-end space-x-3">
          <button
            type="button"
            class="px-4 py-3 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
            @click="closeDialog"
          >
            Annulla
          </button>
          <button
            type="submit"
            class="px-4 py-3 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-opacity-80"
          >
            Aggiungi
          </button>
        </div>
      </div>
    </form>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Dialog from "./Dialog.vue"
import type Table from "../../../assets/js/models/table"
import InputContainer from "./InputContainer.vue"
import Label from "./Label.vue"
import Input from "./Input.vue"
import { Switch, SwitchLabel, SwitchGroup } from "@headlessui/vue"

defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: "close"): void
  (e: "insert", table: Table): void
}>()

const inputColumnsRef = ref<number>(3)
const inputRowsRef = ref<number>(3)
const inputWithHeaderRef = ref<boolean>(true)

function closeDialog() {
  emit("close")
}

function onSubmit() {
  emit("insert", {
    rows: inputRowsRef.value,
    columns: inputColumnsRef.value,
    withHeader: inputWithHeaderRef.value,
  })
  closeDialog()
}
</script>

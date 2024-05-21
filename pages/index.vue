<script setup lang="ts">
const route = useRoute();
import '~/assets/css/index.css';
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue';
</script>

<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Editor logo" image-url="../assets/images/logo.svg" link="#">
        Editor Layout Fatture
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#">
          <NuxtLink to="/about">About</NuxtLink>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          <NuxtLink to="/editor/1">Editor 1</NuxtLink>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          <NuxtLink to="/editor/2">Editor 2</NuxtLink>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          <NuxtLink to="/invoiceLayout/2">EDITOR LAYOUT FATTURE WIP</NuxtLink>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { DefaultLayout } from '@monorepo-app/shared/components'
</script>

<template>
  <DefaultLayout title="Domain 1">
    <RouterView />
  </DefaultLayout>
</template>

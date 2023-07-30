<script setup lang="ts">
import { RouterView } from 'vue-router'
import { DefaultLayout } from '@monorepo-app/shared/components'
</script>

<template>
  <DefaultLayout title="Home">
    <RouterView />
  </DefaultLayout>
</template>

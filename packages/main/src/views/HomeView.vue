<script setup lang="ts">
import { add } from '@monorepo-app/shared'
import { computed } from 'vue'

const result = computed(() => add(1, 2))
</script>

<template>
  <main>
    Result:
    {{ result }}
  </main>
</template>

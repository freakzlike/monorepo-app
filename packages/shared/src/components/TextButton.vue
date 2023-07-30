<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

defineProps<{
  label: string
  to?: RouteLocationRaw
}>()
</script>

<template>
  <RouterLink v-if="to" :to="to">
    <button>
      {{ label }}
    </button>
  </RouterLink>
  <button v-else>
    {{ label }}
  </button>
</template>

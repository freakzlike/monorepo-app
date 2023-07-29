<script setup lang="ts">
import { add } from '@monorepo-app/shared/functions'
import { TextButton, PanelCard } from '@monorepo-app/shared/components'
import { computed } from 'vue'

const result = computed(() => add(1, 2))
</script>

<template>
  <main>
    <PanelCard>
      Result:
      {{ result }}
    </PanelCard>
    <PanelCard>
      <TextButton label="Click" />
    </PanelCard>
  </main>
</template>

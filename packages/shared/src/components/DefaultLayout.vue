<script setup lang="ts">
import TextButton from './TextButton.vue'

defineProps<{
  title?: string
}>()
</script>

<template>
  <div>
    <header>
      {{ title }}
    </header>
    <nav>
      <TextButton label="Home" :to="{ name: 'home' }" />
      <TextButton label="Domain1" :to="{ name: 'Domain1Page' }" />
      <TextButton label="Domain2" :to="{ name: 'Domain2Page' }" />
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
header {
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
}

nav {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>

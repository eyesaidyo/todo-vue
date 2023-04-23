<template>
  <va-navbar v-bind="darkNavbarColors" class="mb-3">
    <template #left>
      <va-navbar-item class="logo">to-DO app</va-navbar-item>
    </template>
    <template #right>
      
      
      
    </template>
  </va-navbar>
</template>
<script setup>
import { computed } from 'vue'
import { useColors } from 'vuestic-ui'

const { currentPresetName } = useColors()

const darkNavbarColors = computed(() => {
  if (currentPresetName.value === 'light') {
    return {
      color: '#111111',
      textColor: '#BAFFC5',
    }
  } else {
    return {
      color: '#FBCAF6',
      textColor: '#481269',
    }
  }
})
</script>
<style scoped>
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
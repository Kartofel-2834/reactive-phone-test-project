<template>
  <div class="card" :class="{ [theme]: true }">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  theme: { type: String, default: "red" },
});
</script>

<style src="@/assets/css/components/card.css" />

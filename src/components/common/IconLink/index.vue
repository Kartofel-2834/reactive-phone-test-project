<template>
  <div class="icon-link" :class="{ [theme]: true }">
    <div class="icon-link__icon">
      <slot name="icon" />
    </div>

    <div class="icon-link__label">
      <slot name="label" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  theme: { type: String, default: "orange" },
});
</script>

<style src="@/assets/css/components/icon-link.css" />

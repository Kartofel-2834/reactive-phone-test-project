<template>
  <div v-if="slots?.icon" class="tag" :class="{ [theme]: true }">
    <div class="tag__icon">
      <slot name="icon" />
    </div>

    <span v-if="slots?.content" class="tag__content">
      <slot name="content" />
    </span>
  </div>
</template>

<script setup>
import { defineProps, useSlots } from "vue";

const slots = useSlots();

const props = defineProps({
  theme: { type: String, default: "orange" },
});
</script>

<style src="@/assets/css/components/tag.css" />

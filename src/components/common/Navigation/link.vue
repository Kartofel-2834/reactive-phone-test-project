<template>
  <div class="nav__link" :class="{ nav__link_active: active }">
    <div class="nav__link__icon">
      <slot name="icon" />
    </div>

    <span class="nav__link__text">
      <slot name="text" />
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  active: { type: Boolean, default: false },
});
</script>

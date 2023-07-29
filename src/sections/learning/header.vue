<template>
  <header class="learning__header" :class="{ [theme]: true }">
    <RouterLink to="/">
      <h2>
        <LinedArrowIcon />
        <span> Learning </span>
      </h2>
    </RouterLink>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

// Icons
import LinedArrowIcon from "@/components/icons/lined-arrow.vue";

const props = defineProps({
  theme: { type: String, default: "orange" },
});
</script>

<style src="@/assets/css/sections/learning/header.css" />

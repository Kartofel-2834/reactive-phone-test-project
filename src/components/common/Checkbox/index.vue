<template>
  <div
    class="checkbox"
    :class="{ checkbox_active: value }"
    @click="() => emit('change', !value)"
  >
    <span><slot /></span>

    <EggIcon />

    <div class="checkbox__check">
      <CheckIcon />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Icons
import EggIcon from "@/components/icons/egg.vue";
import CheckIcon from "@/components/icons/check.vue";

const emit = defineEmits(["change"]);

const props = defineProps({
  value: { type: Boolean, default: false },
});
</script>

<style src="@/assets/css/components/checkbox.css" />

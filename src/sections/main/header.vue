<template>
  <header class="main__header">
    <h2>Ray Driving Theory</h2>

    <div class="main__header__tags">
      <Tag>
        <template #icon> <CrownIcon /> </template>
      </Tag>

      <Tag theme="red">
        <template #icon> <FlameIcon /> </template>
        <template #content> 13 </template>
      </Tag>
    </div>
  </header>
</template>

<script setup>
// Components
import Tag from "@/components/common/Tag";

// Icons
import CrownIcon from "@/components/icons/crown.vue";
import FlameIcon from "@/components/icons/flame.vue";
</script>

<style src="@/assets/css/sections/main/header.css" />

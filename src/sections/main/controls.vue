<template>
  <div class="main__controls">
    <IconLink>
      <template #icon> <PenIcon /> </template>
      <template #label> Mistakes </template>
    </IconLink>

    <IconLink>
      <template #icon> <ChartIcon /> </template>
      <template #label> Statistics </template>
    </IconLink>

    <IconLink>
      <template #icon> <BookIcon /> </template>
      <template #label> Highway Code </template>
    </IconLink>

    <IconLink>
      <template #icon> <BookmarkIcon /> </template>
      <template #label> Favorites </template>
    </IconLink>
  </div>
</template>

<script setup>
// Components
import IconLink from "@/components/common/IconLink";

// Icons
import PenIcon from "@/components/icons/pen.vue";
import ChartIcon from "@/components/icons/chart.vue";
import BookIcon from "@/components/icons/book.vue";
import BookmarkIcon from "@/components/icons/bookmark.vue";
</script>

<style src="@/assets/css/sections/main/controls.css" />

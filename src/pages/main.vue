<template>
  <Header />

  <main>
    <RouterLink to="/learning">
      <Learning />
    </RouterLink>

    <CardsList />
    <Controls />
  </main>

  <Navigation />
</template>

<script setup>
// Sections
import Header from "@/sections/main/header.vue";
import Learning from "@/sections/main/learning.vue";
import CardsList from "@/sections/main/cards-list.vue";
import Controls from "@/sections/main/controls.vue";

// Components
import Navigation from "@/components/common/Navigation";
</script>

<style src="@/assets/css/pages/main.css" />

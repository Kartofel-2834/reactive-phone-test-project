<template>
  <nav :class="{ [theme]: true }">
    <NavLink active>
      <template #icon> <HomeIcon /> </template>
      <template #text> Home </template>
    </NavLink>

    <NavLink>
      <template #icon> <WayIcon /> </template>
      <template #text> Your plan </template>
    </NavLink>

    <NavLink>
      <template #icon> <TopIcon /> </template>
      <template #text> Leaderboard </template>
    </NavLink>

    <NavLink>
      <template #icon> <UserIcon /> </template>
      <template #text> Profile </template>
    </NavLink>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

// Components
import NavLink from "./link.vue";

// Icons
import HomeIcon from "@/components/icons/home.vue";
import WayIcon from "@/components/icons/way.vue";
import TopIcon from "@/components/icons/top.vue";
import UserIcon from "@/components/icons/user.vue";

const props = defineProps({
  theme: { type: String, default: "orange" },
});
</script>

<style src="@/assets/css/components/navigation.css" />

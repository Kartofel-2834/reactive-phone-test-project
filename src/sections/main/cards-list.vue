<template>
  <div class="main__cards-list">
    <Card theme="red" class="main__cards-list__card">
      <DVSAIcon />
      <h3>DVSA Exam</h3>
    </Card>

    <Card theme="purple" class="main__cards-list__card">
      <RocketIcon />
      <h3>Express mode</h3>
    </Card>

    <Card theme="purple" class="main__cards-list__card">
      <TVIcon />
      <h3>Hazard perception</h3>
    </Card>

    <Card theme="purple" class="main__cards-list__card">
      <RoadSignIcon />
      <h3>Road signs</h3>
    </Card>

    <Card theme="purple" class="main__cards-list__card">
      <GamepadIcon/>
      <h3>Multiplayer Learning</h3>
    </Card>
  </div>
</template>

<script setup>
// Components
import Card from "@/components/common/Card";

// Icons
import DVSAIcon from "@/components/icons/dvsa.vue";
import RocketIcon from "@/components/icons/rocket.vue";
import TVIcon from "@/components/icons/tv.vue";
import RoadSignIcon from "@/components/icons/road-sign.vue";
import GamepadIcon from "@/components/icons/gamepad.vue";
</script>

<style src="@/assets/css/sections/main/cards-list.css" />

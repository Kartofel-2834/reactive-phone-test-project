<template>
  <Card class="main__learning" theme="orange">
    <div class="main__learning__info">
      <GraduationCapIcon class="main__learning__info__cap" />

      <div class="main__learning__info__description">
        <h1>Learning</h1>
        <span>Category B</span>
      </div>

      <ArrowIcon class="main__learning__info__arrow" />
    </div>

    <div class="main__learning__questions">
      <p class="main__learning__questions__info">
        {{ questions.selected.size }} questions out of
        {{ questions.data.length }} passed
      </p>

      <div class="main__learning__questions__progress">
        <span
          v-for="index in progressElements"
          :key="index"
          :class="{ active: index * progressElementValue < progress }"
        />
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref, computed } from "vue";

// Store
import { useQuestionsStore } from "@/stores/questions";

// Components
import Card from "@/components/common/Card";

// Icons
import GraduationCapIcon from "@/components/icons/graduation-cap.vue";
import ArrowIcon from "@/components/icons/arrow.vue";

const { floor } = Math;

const questions = useQuestionsStore();

const progressElements = ref(7);
const progressElementValue = ref(floor(100 / progressElements.value));

const progress = computed(() => {
  return questions.selected.size / (questions.data.length / 100);
});
</script>

<style src="@/assets/css/sections/main/learning.css" />

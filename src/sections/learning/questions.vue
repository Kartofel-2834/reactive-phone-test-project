<template>
  <h4 class="orange">Tests</h4>

  <div class="questions">
    <Checkbox
      v-for="(question, index) in questions.data"
      :key="index"
      :value="questions.selected.has(question)"
      @change="(update) => onQuestionToggle(update, question)"
    >
      {{ index + 1 }}
    </Checkbox>
  </div>
</template>

<script setup>
// Components
import Checkbox from "@/components/common/Checkbox";

// Store
import { useQuestionsStore } from "@/stores/questions";

const questions = useQuestionsStore();

function onQuestionToggle(update, question) {
  if (update) {
    questions.add(question);
  } else {
    questions.remove(question);
  }
}
</script>

<style src="@/assets/css/sections/learning/questions.css" />

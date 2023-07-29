import { ref } from "vue";
import { defineStore } from "pinia";

import questions from "@/constants/questions.json";

export const useQuestionsStore = defineStore("learning", () => {
  const data = ref(questions);
  const selected = ref(new Set());

  function add(question) {
    selected.value.add(question);
  }

  function remove(question) {
    selected.value.delete(question);
  }

  return {
    data,
    selected,
    add,
    remove,
  };
});

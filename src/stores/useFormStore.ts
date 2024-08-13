/* eslint-disable no-console */
import { defineStore } from "pinia";
import { ref } from "vue";

const store = defineStore("form", () => {
  const INITIAL_FORM_STATE = {
    names: "", // format: Some Name
    dateStart: "", // format: 13:00
    dateEnd: "", // format: 13:00
  };

  const state = ref(INITIAL_FORM_STATE);

  function handleFormSubmit() {
    console.log(JSON.stringify(state.value));
  }

  return { state, handleFormSubmit };
});

export default store;

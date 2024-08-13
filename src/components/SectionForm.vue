<script setup lang="ts">
import { ref } from "vue";

const INITIAL_FORM_STATE = {
  names: "", // format: Some Name
  dateStart: "", // format: 13:00
  dateEnd: "", // format: 13:00
};

const formData = ref(INITIAL_FORM_STATE);

function handleFormSubmit() {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(formData.value));
}
</script>

<template>
  <section>
    <form @submit.prevent="handleFormSubmit()">
      <input v-model="formData.names" type="text">
      <input v-model="formData.dateStart" type="time">
      <input v-model="formData.dateEnd" type="time">
      <button type="submit">
        Submit
      </button>
    </form>
  </section>
</template>

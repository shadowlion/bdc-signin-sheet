<script setup lang="ts">
import { ref } from "vue";

const today = new Date().toLocaleDateString();
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
    <article>
      <header>Sign In Below for {{ today }}:</header>
      <form @submit.prevent="handleFormSubmit()">
        <label for="names">Names</label>
        <input id="names" v-model="formData.names" type="text" aria-label="Names" placeholder="John and Jane Doe">
        <label for="date-start">Start Time</label>
        <input id="date-start" v-model="formData.dateStart" type="time" aria-label="Start Time">
        <label for="date-end">End Time</label>
        <input id="date-end" v-model="formData.dateEnd" type="time" aria-label="End Time">
        <button type="submit">
          Submit
        </button>
      </form>
    </article>
  </section>
</template>

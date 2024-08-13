<script setup lang="ts">
import useFormStore from "../stores/useFormStore";

const { state: formData, handleFormSubmit } = useFormStore();
</script>

<template>
  <section>
    <article>
      <header>Sign In Below for {{ new Date().toLocaleDateString() }}:</header>
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

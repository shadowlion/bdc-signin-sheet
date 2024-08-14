<script setup lang="ts">
import { storeToRefs } from "pinia";
import useFormStore from "../stores/useFormStore";

const { state: formData, submitting } = storeToRefs(useFormStore());
const { handleFormSubmit } = useFormStore();
</script>

<template>
  <section>
    <article>
      <header>Sign In Below for {{ new Date().toLocaleDateString() }}:</header>
      <form @submit.prevent="handleFormSubmit()">
        <label for="names">Who is Practicing?</label>
        <input id="names" v-model="formData.names" type="text" aria-label="Names" placeholder="John and Jane Doe">
        <label for="date-start">Start Time</label>
        <input id="date-start" v-model="formData.datetimeStart" type="datetime-local" aria-label="Start Time">
        <label for="date-end">End Time</label>
        <input id="date-end" v-model="formData.datetimeEnd" type="datetime-local" aria-label="End Time">
        <button v-if="submitting" aria-busy="true" aria-label="Submitting..." type="submit" disabled>
          Submitting...
        </button>
        <button v-else type="submit">
          Submit
        </button>
      </form>
    </article>
  </section>
</template>

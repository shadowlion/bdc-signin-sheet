<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  name: "",
  instructor: "",
  dateStart: "",
  dateEnd: "",
});

function handleFormSubmit() {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(formData.value));
}
</script>

<template>
  <section>
    <form @submit.prevent="handleFormSubmit()">
      <input id="name" v-model="formData.name" type="text" name="name">
      <input id="instructor" v-model="formData.instructor" type="text" name="instructor">
      <input id="date-start" v-model="formData.dateStart" type="time" name="dateStart">
      <input id="date-end" v-model="formData.dateEnd" type="time" name="dateEnd">
      <button type="submit">
        Submit
      </button>
    </form>
  </section>
</template>

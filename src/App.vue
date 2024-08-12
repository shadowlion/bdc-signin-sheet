<script setup lang="ts">
import SectionForm from "./components/SectionForm.vue";
import SectionHistory from "./components/SectionHistory.vue";
</script>

<template>
  <fieldset>
    <legend>Form</legend>
    <SectionForm />
  </fieldset>
  <fieldset>
    <legend>History</legend>
    <SectionHistory />
  </fieldset>
</template>

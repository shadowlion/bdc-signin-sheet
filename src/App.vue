<script setup lang="ts">
import SectionForm from "./components/SectionForm.vue";
import SectionHistory from "./components/SectionHistory.vue";
</script>

<template>
  <header>
    <span>Header Section</span>
  </header>
  <main class="container">
    <SectionForm />
    <Suspense>
      <SectionHistory />
      <template #fallback>
        <article aria-busy="true" />
      </template>
    </Suspense>
  </main>
  <footer>
    <span>&copy; {{ new Date().getFullYear() }} USA Dance Charleston</span>
  </footer>
</template>

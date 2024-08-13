<script setup lang="ts">
import SectionForm from "./components/SectionForm.vue";
import SectionHistory from "./components/SectionHistory.vue";
</script>

<template>
  <div class="container">
    <header>
      <span>Header Section</span>
    </header>
    <main>
      <SectionForm />
      <Suspense>
        <SectionHistory />
        <template #fallback>
          <article aria-busy="true" />
        </template>
      </Suspense>
    </main>
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} USA Dance Charleston</p>
    </footer>
  </div>
</template>

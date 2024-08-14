<script setup lang="ts">
import SectionForm from "./components/SectionForm.vue";
import SectionHistory from "./components/SectionHistory.vue";
</script>

<template>
  <div class="container">
    <header style="text-align: center">
      <section>
        <img src="./assets/bdc.webp" alt="Ballroom Dance Charleston sign">
      </section>
      <section>
        <h1>Practice Signin Sheet</h1>
      </section>
    </header>
    <main>
      <SectionForm />
      <SectionHistory />
    </main>
    <footer style="text-align: center">
      <p>
        &copy; {{ new Date().getFullYear() }}
        <a href="https://ballroomdancecharleston.com" target="_blank">
          Ballroom Dance Charleston
        </a>
      </p>
    </footer>
  </div>
</template>

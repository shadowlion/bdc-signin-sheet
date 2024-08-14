<script setup lang="ts">
import { ref } from "vue";
import useFirebase from "../composables/useFirebase";
import type { HistoryDocument } from "../types";

const history = ref<HistoryDocument[]>([]);
const { getDocuments } = useFirebase();
history.value = await getDocuments<HistoryDocument>("history");
</script>

<template>
  <section>
    <article>
      <header>Most Recent Signins:</header>
      <table class="striped">
        <thead>
          <tr>
            <th scope="col">
              Names
            </th>
            <th scope="col">
              Start Time
            </th>
            <th scope="col">
              End Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="h in history" :key="h.uid">
            <th scope="row">
              {{ h.names }}
            </th>
            <td>{{ h.datetimeStart.toDate().toLocaleString() }}</td>
            <td>{{ h.datetimeEnd.toDate().toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </section>
</template>

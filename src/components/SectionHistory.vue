<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { Unsubscribe } from "firebase/firestore";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import useFirebase from "../composables/useFirebase";
import type { HistoryDocument } from "../types";

const history = ref<HistoryDocument[]>([]);
const { firestore } = useFirebase();
const collectionRef = collection(firestore, "history");
const q = query(collectionRef, orderBy("datetimeStart", "desc"));

let unsubscribe: Unsubscribe | null;

function setupListener() {
  unsubscribe = onSnapshot(q, (snapshot) => {
    history.value = snapshot.docs.map(doc => ({
      uid: doc.id,
      ...doc.data(),
    } as HistoryDocument));
  });
}

onMounted(() => {
  setupListener();
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});
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

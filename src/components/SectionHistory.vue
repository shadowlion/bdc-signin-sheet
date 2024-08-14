<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { Timestamp, Unsubscribe } from "firebase/firestore";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import useFirebase from "../composables/useFirebase";
import type { HistoryDocument } from "../types";

const loading = ref(true);
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
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});

function getDate(t: Timestamp) {
  return t.toDate().toLocaleString().split(", ")[0];
}

function getTime(t: Timestamp) {
  const date = t.toDate();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours || 12; // the hour '0' should be '12'

  return `${hours}:${String(minutes).padStart(2, "0")} ${ampm}`;
}
</script>

<template>
  <section>
    <article>
      <header>Most Recent Signins:</header>
      <table v-if="!loading" class="striped">
        <thead>
          <tr>
            <th scope="col">
              Names
            </th>
            <th scope="col">
              Date
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
            <td>{{ getDate(h.datetimeStart) }}</td>
            <td>{{ getTime(h.datetimeStart) }}</td>
            <td>{{ getTime(h.datetimeEnd) }}</td>
          </tr>
        </tbody>
      </table>
      <article v-else aria-busy="true" />
    </article>
  </section>
</template>

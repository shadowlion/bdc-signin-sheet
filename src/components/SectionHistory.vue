<script setup lang="ts">
import { ref } from "vue";
import type { Timestamp } from "firebase/firestore";
import { collection, getDocs, query } from "firebase/firestore";
import { useFirebase } from "../composables/useFirebase";

interface HistoryDocument {
  dateEnd: Timestamp;
  dateStart: Timestamp;
  instructor: string | null;
  name: string;
  uid: string;
}

const history = ref<HistoryDocument[]>([]);
const { firestore } = useFirebase();
const colRef = collection(firestore, "history");
const q = query(colRef);
const snapshot = await getDocs(q);
const data = snapshot.docs.map(d => ({ ...d.data(), uid: d.id } as HistoryDocument));
history.value = data;
</script>

<template>
  <section>
    <article>
      <header>Most Recent Signins:</header>
      <table class="striped">
        <thead>
          <tr>
            <th scope="col">
              Name
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
              {{ h.name }}
            </th>
            <td>{{ h.dateStart.toDate().toLocaleString() }}</td>
            <td>{{ h.dateEnd.toDate().toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </section>
</template>

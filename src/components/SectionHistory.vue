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
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Instructor</td>
          <td>Start Time</td>
          <td>End Time</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="h in history" :key="h.uid">
          <td>{{ h.name }}</td>
          <td>{{ h.instructor }}</td>
          <td>{{ h.dateStart.toDate() }}</td>
          <td>{{ h.dateEnd.toDate() }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

import { defineStore } from "pinia";
import { ref } from "vue";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import useFirebase from "../composables/useFirebase";

/**
 * Returns today's date in YYYY-MM-DD format
 */
function today() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const INITIAL_FORM_STATE = {
  names: "", // format: Some Name
  datetimeStart: `${today()}T00:00`, // formatted as 13:00
  datetimeEnd: `${today()}T00:00`, // formatted as 13:00
};

const { firestore } = useFirebase();
const historyCollection = collection(firestore, "history");

/**
 * Given an input that only gives the time as a string (24-hour format),
 * we attach a date to said timestring and instantiate a Timestamp class.
 *
 * Example: "13:33" => "2024-08-13T13:33"
 *
 * @param ds datestring input
 * @returns Timestamp class object
 */
function convertToTimestamp(ds: string) {
  return Timestamp.fromDate(new Date(ds));
}

const store = defineStore("form", () => {
  const submitting = ref(false);
  const state = ref(INITIAL_FORM_STATE);

  function handleFormSubmit() {
    submitting.value = true;
    setTimeout(async () => {
      const documentData = {
        names: state.value.names,
        datetimeStart: convertToTimestamp(state.value.datetimeStart),
        datetimeEnd: convertToTimestamp(state.value.datetimeEnd),
      };

      await addDoc(historyCollection, documentData);

      // Reset the form
      state.value = INITIAL_FORM_STATE;
      submitting.value = false;
    }, 1000);
  }

  return {
    state,
    submitting,
    handleFormSubmit,
  };
});

export default store;

<script setup lang="ts">
function handleSubmit(event: Event) {}
</script>

<template>
  <div>
    <h1>Signin Sheet</h1>
    <fieldset>
      <legend>Form Section</legend>
      <form method="post" @submit="handleSubmit">
        <label for="names">Name(s)</label>
        <input id="names" type="text" name="">
        <br>
        <label for="instructor">Instructor</label>
        <select id="instructor" name="">
          <option value="">
            Please Choose...
          </option>
          <option value="Klajdi Kesari">
            Klajdi Kesari
          </option>
        </select>
        <br>
        <label for="timestamp-start">Please input a start hour</label>
        <input id="timestamp-start" type="time" name="">
        <br>
        <label for="timestamp-end">Please input an end hour</label>
        <input id="timestamp-end" type="time" name="">
        <br>
        <button type="submit">
          Submit
        </button>
      </form>
    </fieldset>
    <fieldset>
      <legend>History</legend>
    </fieldset>
  </div>
</template>

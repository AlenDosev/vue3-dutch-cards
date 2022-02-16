<script setup lang="ts"></script>

<script lang="ts">
export default {
  data: () => ({
    text: "",
    users: [],
  }),
  async mounted() {
    const { data } = await this.axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const google = await this.axios.get(
      "https://sheets.googleapis.com/v4/spreadsheets/1EHBijDmk5nIANiYF4aiUViKKNPfKfgdw-Ws4B8Xt5mA/values/H1!A1:D5?key=AIzaSyDXokXhuuI6PRqUDAMw1dDhOKXlFHcWDh0"
    );
    // const google = await this.axios.get(
    //   "https://opensheet.elk.sh/1EHBijDmk5nIANiYF4aiUViKKNPfKfgdw-Ws4B8Xt5mA/1"
    // );
    this.users = data;
    console.log(google);
  },
};
</script>

<template>
  <main>
    <h1>HELLOO</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </main>
</template>

<template>
  <div id="app">
    <UsersList />
  </div>
</template>

<script>
import UsersList from "./components/UsersList";

export default {
  name: "App",
  components: {
    UsersList,
  },
};
</script>

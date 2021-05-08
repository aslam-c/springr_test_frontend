<template>
  <div>
    <div class="py-4 px-8 bg-white shadow-lg rounded-lg my-20 m-2">
      <h3 class="text-gray-800 text-3xl font-semibold">User Records</h3>

      <button
        @click="createUserRecordPrompt = true"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded float-right"
      >
        Add new
      </button>
    </div>

    <div
      class="py-4 px-8 bg-white shadow-lg rounded-lg my-20 justify-items-center m-2"
    >
      <div class="">
        <create-user-record
          v-if="createUserRecordPrompt"
          @close="createUserRecordPrompt = false"
          @new_record="
            createUserRecordPrompt = false;
            getRecords();
          "
        />

        <div class="grid grid-cols-5">
          <div class="font-semibold">Avatar</div>
          <div class="font-semibold">Name</div>
          <div class="font-semibold">Email</div>
          <div class="font-semibold">Experience</div>
          <div></div>
        </div>
        <div class="text-display text-green-600" v-if="getting_records">
          Fetching Records...
        </div>
        <div class="text-display text-red-600" v-if="error">
          {{ error }}
        </div>
      </div>
      <div v-for="(record, index) in records" :key="index">
        <user-info :user="record" @record_removed="getRecords()" />
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "./UserInfo";
import CreateUserRecord from "./CreateUserRecord";

export default {
  name: "UsersList",
  components: { UserInfo, CreateUserRecord },
  data() {
    return {
      createUserRecordPrompt: false,
      records: [],
      getting_records: false,
      error: "",
    };
  },
  created() {
    this.getRecords();
  },
  methods: {
    getRecords() {
      this.error = "";
      this.getting_records = true;
      this.$axios
        .get("records")
        .then((response) => {
          this.records = response.data.response;
          this.getting_records = false;
        })
        .catch((error) => {
          this.getting_records = false;
          this.error = error.errorText;
        });
    },
  },
};
</script>

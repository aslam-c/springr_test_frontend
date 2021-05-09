<template>
  <div class="mt-1">
    <div class="grid grid-cols-5">
      <div class="">
        <div class="flex space-x-2">
          <div class="relative w-12 h-12">
            <img
              v-if="user.avatar"
              class="rounded-full border border-gray-100 shadow-sm"
              :src="'http://127.0.0.1:8000/storage/' + user.avatar"
              alt="profile_img"
            />
            <img
              v-else
              class="rounded-full border border-gray-100 shadow-sm"
              src="@/assets/avatar.png"
              alt="profile_img"
            />
          </div>
        </div>
      </div>
      <div class="">{{ user.name }}</div>
      <div class="">{{ user.email }}</div>
      <div class="">{{ user.experience }}</div>
      <div>
        <button
          @click="deleteUserPrompt = true"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove
        </button>
      </div>
    </div>
    <!-- modal start -->
    <div
      v-if="deleteUserPrompt"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <svg
                  class="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Delete User
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Are you sure you want to delete ?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="deleteUser()"
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              {{ deleting_record ? "Deleting..." : "Yes" }}
            </button>
            <button
              @click="deleteUserPrompt = false"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal end -->
  </div>
</template>

<script>
export default {
  name: "UsersInfo",
  props: ["user"],
  data() {
    return { deleteUserPrompt: false, deleting_record: false, error: "" };
  },
  methods: {
    deleteUser() {
      this.error = "";
      this.deleting_record = true;
      this.$axios
        .delete(`records/${this.user.id}`)
        .then(() => {
          this.deleteUserPrompt = false;
          this.deleting_record = false;
          this.$emit("record_removed");
        })
        .catch((error) => {
          this.deleting_record = false;
          this.error = error.errorText;
        });
    },
  },
};
</script>

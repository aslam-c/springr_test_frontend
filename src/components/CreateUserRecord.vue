<template>
  <div
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
              class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <!-- <svg
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
                  </svg> -->
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Add new record
                <button
                  class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                  @click="emitClose()"
                >
                  <span>×</span>
                </button>
              </h3>
              <div class="mt-2">
                <!-- form start -->
                <form class="w-full max-w-sm">
                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="email"
                      >
                        Email
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input
                        type="email"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="email"
                        placeholder="asd@abc.com"
                        v-model="$v.email.$model"
                        autocomplete="off"
                      />

                      <span
                        class="text-sm text-red-600"
                        v-if="$v.email.$invalid"
                        >A valid email is required</span
                      >
                    </div>
                  </div>
                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="fullname"
                      >
                        Full name
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="fullname"
                        type="text"
                        v-model="$v.full_name.$model"
                        placeholder="George"
                      />
                      <span
                        class="text-sm text-red-600"
                        v-if="$v.full_name.$invalid"
                        >Full name is required</span
                      >
                    </div>
                  </div>

                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="joining_date"
                      >
                        Date of Joining
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="joining_date"
                        type="date"
                        v-model="$v.joining_date.$model"
                      />
                      <span
                        class="text-sm text-red-600"
                        v-if="$v.joining_date.$invalid"
                        >Select a valid date
                      </span>
                    </div>
                  </div>

                  <div
                    class="md:flex md:items-center mb-6"
                    v-if="!still_working"
                  >
                    <div class="md:w-1/3">
                      <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="leaving_date"
                      >
                        Date of Leaving
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="leaving_date"
                        type="date"
                        v-model="$v.leaving_date.$model"
                      />
                      <span
                        class="text-sm text-red-600"
                        v-if="$v.leaving_date.$invalid"
                        >Select a valid date</span
                      >
                    </div>
                  </div>

                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3"></div>
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                      <input
                        class="mr-2 leading-tight"
                        type="checkbox"
                        v-model="still_working"
                      />
                      <span class="text-sm">
                        Still Working
                      </span>
                    </label>
                  </div>

                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="image"
                      >
                        Upload image
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="image"
                        type="file"
                        ref="upload_image"
                      />
                    </div>
                  </div>
                  <!-- <div class="md:flex md:items-center"> 
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                      <button
                        class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div> -->
                </form>
                <!-- form end -->
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            @click="createUserRecord()"
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            save
          </button>
          <span class="text-sm text-red-600" v-if="error">{{ error }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- modal end -->
</template>
<script>
import { validationMixin } from "vuelidate";
const { required, minLength, email } = require("vuelidate/lib/validators");
const dayjs = require("dayjs");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

export default {
  name: "CreateUserRecord",
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      full_name: "",
      joining_date: "",
      leaving_date: "",
      still_working: false,
      error: "",
    };
  },
  created() {},

  validations: {
    email: { required, email },
    full_name: { required, minLength: minLength(3) },
    joining_date: {
      required,
      isPastDate: (date) => {
        const today = dayjs();
        const isPastDate = dayjs(date).isSameOrBefore(today);
        return isPastDate;
      },
    },
    leaving_date: {
      isPastDate: (date) => {
        const today = dayjs();
        const isPastDate = dayjs(date).isSameOrBefore(today);
        return isPastDate;
      },
    },
  },
  methods: {
    createUserRecord() {
      if (this.$v.$invalid) {
        return;
      } else {
        this.error = "";
        this.$axios
          .post("records", {
            email: this.email,
            full_name: this.full_name,
            experience: this.total_experience,
          })
          .then(() => {
            this.$emit("new_record");
          })
          .catch((error) => {
            this.error = error.errorText;
          });
      }
    },
    emitClose() {
      this.$emit("close");
    },
  },
  computed: {
    total_experience: function() {
      let joining_date = dayjs(this.joining_date);
      let leaving_date = dayjs(this.leaving_date);
      let total_experience_in_months = leaving_date.diff(
        joining_date,
        "months"
      );
      let total_experience;
      console.log(total_experience_in_months);
      if (total_experience_in_months === 0) {
        return "Less than a month";
      }
      if (total_experience_in_months > 11) {
        let total_years = Math.round(total_experience_in_months / 12);
        let total_months;
        if ((total_months = total_experience_in_months % 12) > 0) {
          total_years =
            total_years > 1 ? `${total_years} years ` : `${total_years} year `;
          total_months =
            total_months > 1
              ? `${total_months} months `
              : `${total_months} month `;
          total_experience = total_years + total_months;
        } else {
          total_experience =
            total_years > 1 ? `${total_years} years` : `${total_years} year`;
        }
      } else {
        total_experience =
          total_experience_in_months > 1
            ? `${total_experience_in_months} months`
            : `${total_experience_in_months} month`;
      }
      return total_experience;
    },
  },
  watch: {
    still_working: function(new_value) {
      if (new_value == true) {
        this.$v.leaving_date.$model = dayjs();
      } else {
        this.$v.leaving_date.$model = "";
      }
    },
  },
};
</script>

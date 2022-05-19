<template>
  <div>
    <section class="section1">
      <h1>CURSOS</h1>
    </section>
    <section class="section2">
      <router-link
        :to="{ name: 'anycourse', params: { id: link.pk } }"
        v-for="link in courses_link"
        :key="link.pk"
        v-bind="link"
      >
        <h5 class="title">{{ link.fields.title }}</h5>
        <p>Horas: {{ link.fields.duration }}.0</p>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "courses",
  created() {},
  data: () => {
    return {
      courses_link: [],
    };
  },
  methods: {
    courses() {
      this.$axios
        .get(this.$utils.api_backend + "courses/", {
          headers: {
            Authorization: "Token " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.type == "ok") {
            console.log(response.data.detail);

            this.courses_link = response.data.detail;
          } else if (response.data.type == "error") {
            console.log("data error: ", response.data.detail);
            this.notification(response.data.detail);
          } else {
            this.notification("Algo esta salio mal, contacta al administrador");
          }
        })
        .catch((error) => {
          console.log("PAGE ERROR: ", error);
          this.notification(error.message);
        });
    },
    user_by_id(id) {
      let username = "";
      this.$axios
        .get(this.$utils.api_backend + "user/?pk=" + id, {
          headers: {
            Authorization: "Token " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.type == "ok") {
            username = response.data.detail[0].fields.username;
            console.log("USER ID", username);
            return username;
          } else if (response.data.type == "error") {
            this.notification(response.data.detail);
          } else {
            this.notification("Algo esta salio mal, contacta al administrador");
          }
        })
        .catch((error) => {
          console.log("API USER ID ERROR: ", error);
          this.notification(error.message);
        });
    },
    notification(text) {
      this.$q.notify({
        message: text,
        icon: "announcement",
        color: "red",
      });
    },
  },
  mounted() {
    this.courses();
  },
};
</script>

<style scoped>
@import url("../css/courses.css");
</style>

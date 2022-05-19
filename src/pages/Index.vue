<template>
  <q-page class="body-index">
    <section class="section1">
      <div>
        <h1>Aprende a programar</h1>
        <p>la mejor plataforma donde aprenden los profesionales</p>
      </div>
    </section>
    <section class="section2">
      <div
        class="language-card"
        v-for="link in courses_link"
        :key="link.pk"
        v-bind="link"
      >
        <h5 class="title">{{ link.fields.title }}</h5>
        <!-- <p>Author: {{ this.user_by_id(link.fields.author) }}</p> -->
        <p>Horas: {{ link.fields.duration }}</p>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  created() {
    this.courses();
  },
  data() {
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
          console.log("DATA: ", response.data);
          if (response.data.type == "ok") {
            // this.$utils.authenticated = true;
            // sessionStorage.setItem("username", this.username);
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
    user_by_id(value) {
      this.$axios
        .get(this.$utils.api_backend + "user/?pk=" + value.toString(), {
          headers: {
            Authorization: "Token " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          // console.log("DATA: ", response.data.detail[0]);

          if (response.data.type == "ok") {
            // console.log("user id: ", response.data.detail[0].fields.username);
            return response.data.detail[0].fields.username;
          } else if (response.data.type == "error") {
            // console.log("data error: ", response.data.detail);
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
};
</script>
<style scoped>
@import url("../css/index.css");
</style>

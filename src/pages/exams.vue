<template>
  <div>
    <section class="section1">
      <h1>EXÁMENES</h1>
    </section>
    <section class="section2">
      <div v-for="link in exams_link" :key="link.pk" v-bind="link">
        <h5 class="title">{{ link.fields.title }}</h5>
        <p>Tiempo limite: {{ link.fields.time }}</p>
        <p>
          Mínimo de preguntas correctas:
          {{ link.fields.minimun_correct_answers }}
        </p>
        <router-link :to="{ name: 'anyexam', params: { id: link.pk } }">
          Realizar Examen
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "exam",

  created() {},

  data() {
    return {
      exams_link: [],
    };
  },
  methods: {
    exams() {
      this.$axios
        .get(this.$utils.api_backend + "exams/", {
          headers: {
            Authorization: "Token " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log("DATA: ", response.data);
          if (response.data.type == "ok") {
            console.log(response.data.detail);
            this.exams_link = response.data.detail;
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
  },
  mounted() {
    this.exams();
  },
};
</script>
<style scoped>
@import url("../css/exams.css");
</style>

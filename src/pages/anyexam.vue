<template>
  <div>
    <section class="section1">
      <h1>{{ this.exam_title }}</h1>
    </section>
    <section class="section2">
      <p>User id: {{ this.$route.params.id }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "anyexam",
  created() {
    console.log("ANY EXAM ID: ", this.$route.params.id);
  },
  data() {
    return {
      courses_link: [],
      exam_title: "",
    };
  },
  methods: {
    async exams_by_id(id, user, course) {
      await this.$axios
        .get(
          this.$utils.api_backend +
            "exams/?pk=" +
            id +
            "&user=" +
            user +
            "&course=" +
            course,
          {
            headers: {
              Authorization: "Token " + sessionStorage.getItem("token"),
            },
          }
        )
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
  },
};
</script>

<style scoped>
@import url("../css/anyexam.css");
</style>

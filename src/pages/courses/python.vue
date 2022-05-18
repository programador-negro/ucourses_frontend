<template>
  <div>
    <section class="section1">
      <h1>Python</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  created() {
    this.course();
  },
  data() {
    return { courses_link: [] };
  },
  methods: {
    course() {
      this.$axios
        .get(this.$utils.api_backend + "topics/", {
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
  },
};
</script>

<style scoped>
@import url("../../css/python.css");
</style>

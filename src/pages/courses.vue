<template>
  <div class="body-courses">
    <section class="section1">
      <h1>CURSOS</h1>
    </section>
    <section class="section2">
      <div
        class="course-box"
        v-for="link in courses_link"
        :key="link.pk"
        v-bind="link"
      >
        <router-link
          :to="{ name: 'anycourse', params: { id: link.pk } }"
          style="text-decoration: none"
          class="r-link"
        >
          <img class="logo-python" src="../assets/logo-python.png" alt="" />
          <h5 class="title">{{ link.fields.title }}</h5>
          <p>Horas: {{ link.fields.duration }}.0</p>
        </router-link>
      </div>
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
/* @import url("../css/courses.css"); */
.body-courses {
  height: 100vh;
}

h1 {
  color: orangered;
  font-weight: bold;
  text-align: left;
}

.language-card {
  display: inline-block;
  background-color: rgb(235, 235, 235);
  border-radius: 1rem;
  width: max-content;
  height: min-content;
  padding: 1% 5%;
  text-align: center;
  margin: 0% 2%;
}
.language-card > .title {
  font-size: 2em;
  /* width: 100%; */
}

/* .section2 {
  display: flex;
} */

.section1 {
  padding: 0% 5%;
  text-align: left;
}
.course-box {
  background-color: rgb(235, 235, 235);
  width: 30%;
  display: inline-block;
  margin: 0% 1%;
  text-align: center;
  border-radius: 1em;
}

.r-link {
  width: 30%;
}
.r-link > h5 {
  color: orangered;
  font-weight: bold;
  margin: 4% 0%;
}
.r-link > p {
  color: black;
}
.logo-python {
  width: 50%;
  height: 50%;
}
</style>

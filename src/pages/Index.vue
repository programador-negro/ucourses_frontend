<template>
  <div class="body-index">
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
        <router-link
          :to="{ name: 'anycourse', params: { id: link.pk } }"
          style="text-decoration: none"
          class="r-link"
        >
          <img class="logo-python" src="../assets/logo-python.png" alt="" />
          <h5 class="title">{{ link.fields.title }}</h5>
          <span>Duración: {{ link.fields.duration }}.0 Horas</span>
        </router-link>
      </div>
    </section>
  </div>
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
/* @import url("../css/index.css"); */
.body-index {
  height: 100vh;
}

.title {
  color: orangered;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 1% 5%;
  font-size: 3em;
  text-align: center center;
  display: inline-block;
}
.section1 {
  display: flex;
  width: 100vw;
  margin: 0px;
  padding: 0% 5%;
  text-align: left;
}
.section2 {
  margin: 1% 1%;
  text-align: center;
}
.language-card {
  display: inline-block;
  background-color: white;
  border-radius: 1rem;
  width: 280px;
  height: auto;
  padding: 2% 0%;
  text-align: center;
  margin: 3% 2%;
}
.language-card > .title {
  font-size: 2em;
  /* width: 100%; */
}

h1 {
  color: orangered;
  margin: 5% 0%;
  font-weight: bold;
}
p {
  font-size: 2em;
}

.logo-python {
  width: 50%;
  height: 50%;
}
</style>

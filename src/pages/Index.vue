<template>
  <q-page class="flex flex-center">
    <section class="section1">
      <img
        alt="Quasar logo"
        src="../assets/rafael.jpg"
        style="width: 200px; height: 200px"
      />
    </section>
    <section class="section2">
      <div class="grid-container">
        <div class="grid-item">
          <h3>Aprende a programar</h3>
          <p>la mejor plataforma donde aprenden los ingenieros</p>
        </div>
        <div
          v-for="link in courses_link"
          :key="link.title"
          v-bind="link"
          class="grid-item"
        >
          <img :src="link.image" alt="imagen" width="100" height="100" />
          <h4>{{ link.title }}</h4>
          <p>{{ link.description }}</p>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      courses_link: [
        {
          title: "Python Basico",
          description: "el mejor curso",
          image: require("../assets/logo-python.png"),
        },
      ],
    };
  },
});
</script>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  /* background-color: #2196f3; */
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 10px;
  font-size: 30px;
  text-align: center top;
  display: inline-block;
}
.section1 {
  width: 100vw;
  background-image: url("../assets/universidad.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  text-align: center;
}
.section2 {
  margin: 5% 6%;
}

h3 {
  color: orangered;
}
</style>

<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="../assets/rafael.jpg"
      style="width: 200px; height: 200px"
    />
    <section>
      <div class="grid-container">
        <div class="grid-item">
          <h1>Aprende a programar</h1>
          <p>la mejor plataforma donde aprenden los ingenieros</p>
        </div>
        <div
          v-for="link in courses_link"
          :key="link.title"
          v-bind="link"
          class="grid-item"
        >
          <img :src="link.image" alt="" />
          <h2>{{ link.title }}</h2>
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
          image: "../assets/rafael.jpg",
        },
      ],
    };
  },
});
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  /* background-color: #2196f3; */
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>

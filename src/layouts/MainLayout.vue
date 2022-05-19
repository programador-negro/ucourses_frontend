<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-red-6">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> University Courses </q-toolbar-title>

        <div>Hola {{ this.username }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>
        <q-item clickable tag="a" @click="this.$router.push('/index')">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Inicio</q-item-label>
            <q-item-label caption> regresar al inicio </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="this.$router.push('/courses')">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Cursos</q-item-label>
            <q-item-label caption> regresar al inicio </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="this.$router.push('/exams')">
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Examenes</q-item-label>
            <q-item-label caption> regresar al inicio </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="this.$router.push('/profile')">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Perfil</q-item-label>
            <q-item-label caption> regresar al inicio </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="this.$router.push('/')">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Salir</q-item-label>
            <q-item-label caption> Cerrar Sesión</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

// const linksList = [
//   {
//     title: "Inicio",
//     caption: "",
//     icon: "home",
//     link: "/#/index",
//   },
//   {
//     title: "Cursos",
//     caption: "Todos los cursos de la plataforma",
//     icon: "school",
//     link: "/#/courses",
//   },
//   {
//     title: "Exámenes",
//     caption: "Comprueba tu conocimiento",
//     icon: "code",
//     link: "/#/exams",
//   },
//   {
//     title: "Foro",
//     caption: "Comunidad de apoyo",
//     icon: "record_voice_over",
//     link: "https://forum.quasar.dev",
//   },
//   {
//     title: "Salir",
//     caption: "Cerrar sesión de la plataforma",
//     icon: "favorite",
//     link: "",
//   },
// ];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  // components: {
  //   EssentialLink,
  // },

  // setup() {
  //   const leftDrawerOpen = ref(false);

  //   return {
  //     essentialLinks: linksList,
  //     leftDrawerOpen,
  //     toggleLeftDrawer() {
  //       leftDrawerOpen.value = !leftDrawerOpen.value;
  //     },
  //   };
  // },
  data() {
    return {
      // username: sessionStorage.getItem("username"),
      username: sessionStorage.getItem("username"),
    };
  },
});
</script>

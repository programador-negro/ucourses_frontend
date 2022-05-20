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

        <q-toolbar-title> Cursos Universitarios </q-toolbar-title>

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
            <q-item-label caption> Ver todos los cursos </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="this.$router.push('/exams')">
          <q-item-section avatar>
            <q-icon name="book" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Exámenes</q-item-label>
            <q-item-label caption> Ver exámenes </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" @click="this.$router.push('/profile')">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Perfil</q-item-label>
            <q-item-label caption> mis calificaciones </q-item-label>
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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  // components: {
  //   EssentialLink,
  // },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      username: sessionStorage.getItem("username"),
    };
  },
});
</script>

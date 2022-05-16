<template>
  <div>
    <div class="container">
      <div class="autenticacion">
        <h2 class="text-light-blue-8">Bienvenido</h2>
        <q-input
          standout="bg-orange text-white"
          v-model="text"
          label="usuario"
        />
        <br />
        <q-input
          standout="bg-orange text-white"
          v-model="text"
          label="contraseña"
          type="password"
        />
        <br />
        <q-btn
          :loading="loading4"
          color="light-green "
          @click="simulateProgress(4)"
          style="width: 150px"
        >
          Iniciar sesión
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Cargando...
          </template>
        </q-btn>
        <br />
        <br />
        <hr />
        <br />
        <p>¿Aun no estas registrado?</p>
        <q-btn
          :loading="loading4"
          color="secondary"
          @click="simulateProgress(4)"
          style="width: 150px"
        >
          Regístrate
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Cargando...
          </template>
        </q-btn>
      </div>
      <div class="presentacion">
        <img src="../assets/logo-ucourses.png" alt="" />
        <h3>Ucourses</h3>
        <p>Una plataforma de aprendizaje efectivo</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",

  created() {},

  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      progress: false,
    };
  },
  methods: {
    simulateProgress(number) {
      // we set loading state
      this[`loading${number}`] = true;
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false;
      }, 3000);
    },
  },
};
</script>
<style>
@import url("../css/login.css");
</style>

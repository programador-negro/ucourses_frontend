<template>
  <div class="body-login">
    <div class="container">
      <div class="autenticacion">
        <h2 class="text-light-blue-8">Bienvenido</h2>
        <q-input
          standout="bg-orange text-white"
          v-model="username"
          label="usuario"
        />
        <br />
        <q-input
          standout="bg-orange text-white"
          v-model="password"
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
        <img src="../assets/rafael.png" alt="" />
        <h3>C.U.R.N.</h3>
        <p>Una plataforma de aprendizaje efectivo</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",

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
      error_message: "",
      username: "",
      password: "",
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
      this.login();
    },
    login() {
      console.log("username", this.username);
      console.log("password", this.password);
      if (
        (this.usename !== "" && this.username !== null) ||
        (this.passsword !== "" && this.passsword !== null)
      ) {
        this.$axios
          .post(this.$utils.api_backend + "authentication/", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            console.log("DATA: ", response.data);
            console.log("Token: ", response.data.detail.token);
            if (response.data.type == "ok") {
              this.$utils.authenticated = true;
              sessionStorage.setItem("username", this.username);
              sessionStorage.setItem("id", response.data.detail.id);
              sessionStorage.setItem("token", response.data.detail.token);

              this.$router.push("/index");
            } else if (response.data.type == "error") {
              console.log("data error: ", response.data.detail);
              this.notification(response.data.detail);
            } else {
              this.notification(
                "Algo esta salio mal, contacta al administrador"
              );
            }
          })
          .catch((error) => {
            console.log("PAGE ERROR: ", error);
          });
      } else {
        console.log("no se enviaron las credenciales de acceso");
      }
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
@import url("../css/login.css");
</style>

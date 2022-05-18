<template>
  <div>
    <section class="section1">
      <h1>{{ this.course_title }}</h1>
    </section>
    <section class="section2">
      <q-expansion-item
        class="full-width"
        v-for="link in topics_link"
        :key="link.pk"
        v-bind="link"
      >
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar icon="book" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            {{ link.fields.title }}
          </q-item-section>
          <q-item-section side>
            <q-dialog>
              <q-card class="full-width">
                <q-card-section>
                  <div class="text-h6">Alert</div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-item-section>
        </template>

        <q-card>
          <q-card-section>
            <div v-html="link.fields.content"></div>
            <!-- {{ link.fields.content }} -->
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-btn
        color="white"
        text-color="black"
        @click="
          this.$router.push({ name: 'anyexam', params: { id: this.course_id } })
        "
        label="Realizar Examen"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "anycourse",
  // created() {

  // },
  data() {
    return {
      topics_link: [],
      course_title: "any course",
      course_id: this.$route.params.id,
      one_load: false,
    };
  },
  methods: {
    async topics_by_id(id) {
      await this.$axios
        .get(this.$utils.api_backend + "topics/?course_id=" + id.toString(), {
          headers: {
            Authorization: "Token " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.type == "ok") {
            console.log(response.data.detail);
            this.topics_link = response.data.detail;
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

    async course_by_id(id) {
      await this.$axios
        .get(this.$utils.api_backend + "courses/?pk=" + id.toString(), {
          headers: {
            Authorization: "Token " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.type == "ok") {
            this.course_title = response.data.detail[0].fields.title;
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
  mounted() {
    this.topics_by_id(this.$route.params.id);
    this.course_by_id(this.$route.params.id);
  },
};
</script>

<style scoped>
@import url("../css/anycourse.css");
</style>

import { boot } from "quasar/wrappers";

const utils = {
  authenticated: false,
  api_backend: "http://127.0.0.1:8000/api/",
};

export default boot(({ app }) => {
  app.config.globalProperties.$utils = utils;
});

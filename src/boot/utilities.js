import { boot } from "quasar/wrappers";

const utils = {};

export default boot(({ app }) => {
  app.config.globalProperties.$utils = utils;
});

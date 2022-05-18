const routes = [
  {
    path: "/index",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/index.vue") }],
  },
  {
    path: "/",
    component: () => import("pages/login.vue"),
    // children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/profile.vue") }],
  },
  {
    path: "/register",
    name: "register",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/register.vue") }],
  },
  {
    path: "/courses",
    name: "courses",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/courses.vue") },
      {
        path: "/anycourse/:id",
        name: "anycourse",
        component: () => import("pages/anycourse.vue"),
      },
    ],
  },
  {
    path: "/exams",
    name: "exams",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/exams.vue") },
      {
        path: "/anyexam/:id",
        name: "anyexam",
        component: () => import("pages/anyexam.vue"),
      },
    ],
  },
  // {
  //   path: "/anycourse/:id",
  //   name: "anycourse",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/anycourse.vue") }],
  // },
  // {
  //   path: "/anyexam/:id",
  //   name: "anyexam",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/anyexam.vue") }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

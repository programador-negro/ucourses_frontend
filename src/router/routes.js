const routes = [
  {
    path: "/index",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/",
    component: () => import("pages/login.vue"),
    // children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/profile.vue") }],
  },
  {
    path: "/register",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/register.vue") }],
  },
  {
    path: "/courses",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/courses.vue") }],
  },
  {
    path: "/exams",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/exams.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

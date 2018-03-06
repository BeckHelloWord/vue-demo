export default [
  {
    path: "/",
    component: resolve => require(["../page/index.vue"], resolve)
  },
  {
    path: "/content/:id",
    component: resolve => require(["../page/content.vue"], resolve)
  },
  {
    path: "/user",
    component: resolve => require(["../frame/subroute.vue"], resolve), //懒加载组件
    //嵌套路由，注意：子路由path，前面不需要添加'/'
    children: [
      {
        path: "/",
        component: resolve => require(["../page/user/index.vue"], resolve)
      },
      {
        path: "info",
        component: resolve => require(["../page/user/info.vue"], resolve)
      },
      {
        path: "love",
        component: resolve => require(["../page/user/love.vue"], resolve)
      }
    ]
  }
];

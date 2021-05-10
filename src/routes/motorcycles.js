
export default {
  path: '/motorcycles',
  props: true,
  component: () => import(/* webpackChunkName: "motorcycles" */ "@/ui/motorcycles/Index"),
  children: [
    {
      path: "",
      name: "motorcycles:list",
      component: () =>
        import(/* webpackChunkName: "motorcycles-list" */ "@/ui/motorcycles/List"),
    },
    {
      path: ":id",
      props: true,
      name: "motorcycles:show",
      component: () =>
        import(/* webpackChunkName: "motorcycles-show" */ "@/ui/motorcycles/Show"),
    },
  ]
}
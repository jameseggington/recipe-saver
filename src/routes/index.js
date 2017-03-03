export default {
  path: "/",
  indexRoute: "home",
  component: require('./../App').default,
  childRoutes: [
    { path: "home", component: require('./Home').default },
    { path: "recipe/:id", component: require('./Recipe').default }
  ]
};

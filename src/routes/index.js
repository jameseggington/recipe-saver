export default {
  path: "/",
  indexRoute: require('./Home').default,
  getComponent: function(nextState, callback){
    require.ensure([], function(require){
      callback(null, require("./../App").default);
    });
  },
  childRoutes: []
};

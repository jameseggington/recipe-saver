export default {
  getComponent: function(nextState, callback){
    require.ensure([], function(require){
      callback(null, require("./Home").default);
    });
  }
};

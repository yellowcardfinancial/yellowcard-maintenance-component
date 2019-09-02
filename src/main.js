// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Maintenance from './App'

Vue.config.productionTip = false;

const Components = {
  Maintenance
};


Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Maintenance },
  template: '<Maintenance/>'
})

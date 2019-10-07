import Vue from 'vue';
import Maintenance from './Maintenance.vue';

const Components = {
    Maintenance
};


Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;

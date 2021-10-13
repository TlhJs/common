import HandWrite from './handwrite/main.vue';

const components = [
    HandWrite
];
const install = (Vue) => {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
};

export default install;

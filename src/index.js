import stickyTop from './stickyTop.vue';

export default stickyTop;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('sticky-top', stickyTop)
}
// const ctx = require.context('./', true, /^(?!.*(?:\/_|-story\.vue|-test\.vue)).*\.vue$/)();
// // const components = ctx.keys().map(ctx);
//
// console.log(ctx)

import Vue from 'vue'
Vue.component('icon-add', () => import('./Add'));
Vue.component('icon-alarm', () => import('./Alarm'));
Vue.component('icon-error', () => import('./Error'));
Vue.component('icon-volume', () => import('./Volume'));
Vue.component('icon-profile', () => import('./Profile'));
Vue.component('icon-chat', () => import('./Comments')); //Should be refactor
Vue.component('icon-setting', () => import('./Setting'));
Vue.component('icon-search', () => import('./Search'));
Vue.component('icon-volume-off', () => import('./VolumeOff'));

Vue.component('icon-success', () => import('./Success'));
Vue.component('icon-dropdown-arrow', () => import('./DropdownArrow'));



Vue.component('icon-success', () => import('./Success'));
Vue.component('icon-dropdown-arrow', () => import('./DropdownArrow'));
Vue.component('icon-notebook', () => import('./Notebook'));
Vue.component('icon-language', () => import('./Language'));
Vue.component('icon-location', () => import('./Location'));
Vue.component('icon-home', () => import('./Home'));
Vue.component('icon-phone', () => import('./Phone'));
Vue.component('icon-letter', () => import('./Letter'));
Vue.component('icon-edit', () => import('./Edit'));
Vue.component('icon-mobile', () => import('./Mobile'));
Vue.component('icon-info', () => import('./Info'));
Vue.component('icon-points-vertical', () => import('./PointsVertical'));
Vue.component('icon-points-horizontal', () => import('./PointsHorizontal'));
Vue.component('icon-calendar-error', () => import('./CalendarError'));
Vue.component('icon-calendar', () => import('./Calendar'));
Vue.component('icon-attach', () => import('./Attach'));
Vue.component('icon-checkbox', () => import('./Checkbox'));
Vue.component('icon-comments', () => import('./Comments'));
Vue.component('icon-privilege', () => import('./Privilege'));
Vue.component('icon-file-storage', () => import('./FileStorage'));
Vue.component('icon-wallet', () => import('./Wallet'));
Vue.component('icon-arrow-right', () => import('./ArrowRight'));
Vue.component('icon-editor', () => import('./Editor'));
Vue.component('icon-watcher', () => import('./Watcher'));

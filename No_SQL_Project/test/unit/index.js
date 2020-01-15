import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
Vue.config.productionTip = false;


const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);


const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);

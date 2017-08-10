/* 
* @Author: Qi JianWei
* @Date:   2017-06-23 11:30:09
* @Last Modified by:   Qi JianWei
* @Last Modified time: 2017-06-23 11:30:51
*/


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import getters from './getters.js';
import mutations from './mutations.js';
import state from './state.js';
import actions from './actions.js';

export default new Vuex.Store({
   state,
   getters,
   mutations,
   actions

});
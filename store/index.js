/**
 * Created by Administrator on 2017/12/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export const Store = new Vuex.Store({
	actions,
	getters,
	mutations,
	state
})

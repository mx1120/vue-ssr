/**
 * Created by Administrator on 2017/12/29.
 */
import * as types from './mutation-typs'

const mutations = {
	[types.USERINFO](state, payload) {
		state.userInfo = { ...state.userInfo, ...payload }
	}
}

export default mutations

/**
 * Created by Administrator on 2017/12/29.
 */
import axios from 'axios'

export default function ({route}) {
	axios.default.timeout = 5000
	axios.interceptors.request.use(config => {
		return config
	}, error => {
		return Promise.reject(error)
	})

	axios.interceptors.response.use(res => {
		return res
	}, error => {
		return Promise.reject(error)
	})
	console.info(route.fullPath)
}


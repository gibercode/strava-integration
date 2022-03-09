import axios from "axios";
import { BASEURL } from './path'

const requestService = async (url = '', method = 'GET', data = undefined, auth = null, errorAction = null) => {
	try {
		const config = {
			method,
			url: `${BASEURL}${url}`,
			data,
			headers: { 'Content-Type': 'application/json' },
		}

		if (auth) config.headers.Authorization = `Bearer ${auth}`

		const response = await axios(config)
		if (response.status === 200) return response?.data

	} catch (err) {
		if (errorAction) errorAction()
		throw new Error(err.message)
	}
}

export default requestService
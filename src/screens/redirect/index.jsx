import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { requestService, clientId, clientSecret } from '../../utils'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../store/actions'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import styles from './styles.module.scss'

const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />

const Redirect = () => {
	const scope = 'read,activity:read'
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const getCode = () => {
		const { search } = location
		const splitUrl = search.split('=')
		const code = splitUrl[2]
		const replaced = code.replace('&scope', '')
		return replaced
	}

	const navigation = route => navigate(route)

	useEffect(() => {
		const authInStrava = async () => {
			const response = await requestService(`oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${getCode()}&grant_type=authorization_code&scope=${scope}`, 'POST', null, null, () => navigation('/'))
			dispatch(setUserData({ userData: response }))
			navigation('/dashboard')
		}

		authInStrava()
	}, [])

	return (
		<div className={styles.main}>
			<Spin indicator={antIcon} />
		</div>
	)
}

export default Redirect
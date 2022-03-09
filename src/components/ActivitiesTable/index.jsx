import { useEffect } from 'react'
import { requestService, buildArray } from '../../utils'
import { columns } from '../../utils'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setUserActivity } from '../../store/actions'

const ActivitiesTable = () => {

	const dispatch = useDispatch()
	const { auth: { userData }, activity: { userActivities } } = useSelector(state => state)

	useEffect(() => {
		const getActivities = async () => {
			const response = await requestService('api/v3/athlete/activities', 'GET', null, userData?.access_token)
			dispatch(setUserActivity({ userActivities: response }))
		}

		getActivities()
	}, [])

	return (
		<div style={{ padding: '1rem' }}>
			<Table columns={columns} dataSource={buildArray(userActivities)} />
		</div>
	)
}

export default ActivitiesTable

import { useEffect, useState } from 'react'
import { Tabs, Table, Card } from 'antd'
import { useSelector } from 'react-redux'
import { buildArray, columns, months } from '../../utils'
import styles from './styles.module.scss'

const { TabPane } = Tabs

const MonthlySection = () => {

	const { activity: { userActivities } } = useSelector(state => state)

	const filterActivities = (month, set = false) => {
		const filtered = userActivities.filter(item => {
			const date = new Date(item?.start_date).getMonth()
			if (date == month) return item
		})

		if (set) setLocalActivity(buildArray(filtered))
		return buildArray(filtered)
	}

	const [localActivity, setLocalActivity] = useState(filterActivities(1))

	useEffect(() => {
		filterActivities()
	}, [])

	const calculateTotal = key => {
		const total = localActivity.reduce((sum, current) => sum + current[key], 0)
		return total
	}

	return (
		<div className={styles.main}>
			<Tabs defaultActiveKey="1" onChange={(value) => filterActivities(value, true)}>
				{
					months.map((item) => (
						<TabPane tab={item.month} key={item.value}>
							<Table columns={columns} dataSource={localActivity} />
							<div>
								<Card title="Month summary" bordered style={{ width: 300 }}>
									<ul className={styles.list}>
										<li>Distance: {calculateTotal('distance') || 0}</li>
										<li>Time: {calculateTotal('time') || 0}</li>
										<li>Elevation: {calculateTotal('elevation') || 0}</li>
									</ul>
								</Card>
							</div>
						</TabPane>
					))
				}
			</Tabs>
		</div>
	)
}
export default MonthlySection
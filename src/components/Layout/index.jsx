import { Layout, Menu, Dropdown } from 'antd'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons'

const DashboardLayout = ({ children }) => {

	const navigation = useNavigate()
	const { auth: { userData } } = useSelector(state => state)
	const { athlete } = userData
	const { Header, Content, Sider } = Layout

	const logout = () => {
		localStorage.clear()
		navigation('/')
	}

	const menu = (
		<Menu>
			<Menu.Item key='0' onClick={logout}>
				<p>Log out</p>
			</Menu.Item>
		</Menu>
	);

	return (
		<Layout className={styles.layout}>
			<Sider breakpoint="lg" collapsedWidth="0">
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className={styles.sidebar}>
					<Menu.Item key="1" onClick={() => navigation('/dashboard')}>
						Activities
					</Menu.Item>
					<Menu.Item key="2" onClick={() => navigation('/dashboard/monthly')}>
						Monthly Activities
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header className={styles.header} >
					<div  className={styles.dropDownParent} >
						<Dropdown overlay={menu} trigger={['click']} className={styles.user} >
							<p>{athlete?.firstname} {athlete?.lastname} <DownOutlined /> </p>
						</Dropdown>
					</div>
				</Header >
				<Content className={styles.content}>
					{children}
				</Content>
			</Layout>
		</Layout>
	)
}

export default DashboardLayout
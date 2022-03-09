import styles from './styles.module.scss'
import { signInPath } from '../../utils/path'

const SignIn = () => {
	
	const handleLogin = () => window.location = signInPath

	return (
		<div className={styles.main}>
			<div className={styles.card}>
				<h1>Sign in with strava to continue</h1>
				<button className={styles.button} onClick={handleLogin}>SIGN IN</button>
			</div>
		</div>
	)
}

export default SignIn
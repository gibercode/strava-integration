import { clientId } from './config'

export const signInPath = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000/redirect/exchange_token&approval_prompt=force&scope=read,activity:read`
export const BASEURL = 'https://www.strava.com/'
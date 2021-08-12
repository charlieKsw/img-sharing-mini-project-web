import { AuthStore } from './auth';
import axios, { Method } from 'axios';
import https from 'https';
import { action } from 'mobx';
import { getLocalStorage } from '../utils';
import { message } from 'antd';

export class ApiStore {
	@action.bound
	callApi(method: Method, url: string, params: any = null) {
		return new Promise(async (resolve, reject) => {
			try {
				const token = await getLocalStorage('token');
				const httpsAgent = new https.Agent({ rejectUnauthorized: false });
				let response = await axios({
					httpsAgent: httpsAgent,
					method: method,
					url: url,
					data: params,
					headers: {
						authorization: `bearer ${token}` || null
					}
				});
				return resolve(response ? response.data : null);
			} catch (e) {
				const { status, data } = (e && e.response) || {};
				switch (status) {
					case 401:
						message.error('connection timed out, please login again');
						const { logout } = new AuthStore();
						logout();
						reject({ success: false, ode: 401, message: 'Please login again', data });
						break;
					case 404:
						message.error('Permission denied - please check your access right with admin');
						reject({ success: false, code: 404, message: 'Permission Denied', data: null });
						break;
					default:
						return reject({ success: false, code: 500, message: 'Please try again later', data: null });
				}
			}
		});
	}
}

export const STORE_API = 'apiStore';

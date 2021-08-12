import { action } from 'mobx'; //observable
import { removeAllLocalStorage, setLocalStorage } from '../utils';
import { ApiStore } from './api';
import { history } from './router';
import { api } from '../config/api';
const md5 = require('md5');

export class AuthStore {
	@action.bound
	async login(username: string, password: string) {
		const md5Pwd = md5(password);
		const url = `${api.path}/login`;
		const { callApi } = new ApiStore();
		const generalError = { success: false, error: 'general_error' };
		try {
			const result: any = await callApi('POST', url, { email: username, password: md5Pwd });
			if (result && result['success']) {
				const token = result['token'];
				const isIncorrectPwd = result['isIncorrectPwd'];

				// Case: Incorrect Pwd
				if (isIncorrectPwd) return { success: false, showEmailPrompt: false };

				// Check if token exist
				if (!token) return { success: false, error: 'without_token' };
				setLocalStorage('token', token);
				return { success: true, redirect: '/home' };
			}
			return generalError;
		} catch (e) {
			return generalError;
		}
	}

	async createUser(username: string, password: string) {
		const md5Pwd = md5(password);
		const url = `${api.path}/sign-up`;
		const { callApi } = new ApiStore();
		const generalError = { success: false, error: 'general_error' };
		try {
			const result: any = await callApi('POST', url, { email: username, password: md5Pwd });
			if (result && result['success']) {
				const isDuplicated = result['error'];

				// Case: isDuplicated account
				if (isDuplicated) return { success: true, isDuplicated: result['error'] };
				return { success: true };
			}
			return generalError;
		} catch (e) {
			return generalError;
		}
	}
	@action.bound
	async logout() {
		removeAllLocalStorage();
		return history.push('/');
	}
}

export const STORE_AUTH = 'authStore';

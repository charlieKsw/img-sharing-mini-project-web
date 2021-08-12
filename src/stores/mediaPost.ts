import { action } from 'mobx';
import { api } from '../config/api';
import { ApiStore } from './api';

export class MediaPostStore {
	@action.bound
	async createMediaPost(imgUrl: string, description: string) {
		const url = `${api.path}/create-post`;
		const { callApi } = new ApiStore();
		const generalError = { success: false, error: 'general_error' };
		try {
			const result: any = await callApi('POST', url, { imgUrl: imgUrl, description: description });
			if (result && result['error']) {
				return { success: false };
			}

			if (result && result['success']) {
				return { success: true };
			}
			return generalError;
		} catch (e) {
			return generalError;
		}
	}
	async getMediaPost() {
		const url = `${api.path}/get-post`;
		const { callApi } = new ApiStore();
		const generalError = { success: false, error: 'general_error' };
		try {
			const result: any = await callApi('GET', url, {});
			if (result && result['success']) {
				return { success: true, userPost: result['userPost'] };
			}
			return generalError;
		} catch (e) {
			return generalError;
		}
	}
}

export const STORE_MEDIA_POST = 'mediaPostStore';

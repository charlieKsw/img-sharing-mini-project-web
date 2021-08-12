const getLocalStorage = (key: string) => {
	return new Promise(async (resolve, reject) => {
		try {
			const item = await localStorage.getItem(key);
			resolve(item);
		} catch (e) {
			reject({ code: 500, message: e.message, data: null });
		}
	});
};

const getLocalStorageWithAsync = (key: string) => {
	try {
		const item = localStorage.getItem(key);
		return item;
	} catch (e) {
		return false;
	}
};

const removeAllLocalStorage = () => {
	localStorage.clear();
};

const setLocalStorage = (key: string, params: any) => {
	if (typeof params === 'object') {
		params = JSON.stringify(params);
	}
	localStorage.setItem(key, params);
	return true;
};

export { getLocalStorage, getLocalStorageWithAsync, removeAllLocalStorage, setLocalStorage };

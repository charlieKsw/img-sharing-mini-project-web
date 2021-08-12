// ./src/stores/index.ts
import { createContext, useContext } from 'react';
import { STORE_ROUTER, RouterStore, history } from './router';
import { STORE_AUTH, AuthStore } from './auth';
import { STORE_MEDIA_POST, MediaPostStore } from './mediaPost';

function createStores() {
	return {
		[STORE_ROUTER]: new RouterStore(),
		[STORE_AUTH]: new AuthStore(),
		[STORE_MEDIA_POST]: new MediaPostStore()
	};
}

const stores = createStores();

const StoresContext = createContext(stores);

const useStores = () => useContext(StoresContext);

function useRouterStore() {
	const { routerStore } = useStores();
	return routerStore;
}

function useAuthStore() {
	const { authStore } = useStores();
	return authStore;
}

function useMediaPostStore() {
	const { mediaPostStore } = useStores();
	return mediaPostStore;
}

export { stores, history, StoresContext, useRouterStore, useAuthStore, useMediaPostStore };

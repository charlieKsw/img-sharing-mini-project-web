import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export class RouterStore extends BaseRouterStore {
	constructor() {
		super();
		this.history = syncHistoryWithStore(history, this);
	}
}

export const STORE_ROUTER = 'routerStore';

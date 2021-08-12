import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import { history } from './stores';

// Components
import Login from './pages/login';
import HomePage from './pages/home';
import ExplorePage from './pages/explore';

export default function Routers() {
	return (
		<Router history={history}>
			<div style={{ display: 'flex', flex: 1, minHeight: '100vh', minWidth: 1024 }}>
				<Switch>
					<Route path={'/home'} exact component={HomePage} />
					<Route path={'/explore'} exact component={ExplorePage} />
					<Route path={'/'} exact component={Login} />
					<Route path="*">
						<Redirect from={'/'} to={'/'} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

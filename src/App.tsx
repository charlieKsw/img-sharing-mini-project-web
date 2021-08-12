import React from 'react';
import { Provider } from 'mobx-react';
import Routers from './router';
import { stores, StoresContext } from './stores';
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill! - to cater ios cannot scroll smoothly issue
smoothscroll.polyfill();

function App() {
	return (
		<Provider {...stores}>
			<StoresContext.Provider value={stores}>
				<Routers />
			</StoresContext.Provider>
		</Provider>
	);
}

export default App;

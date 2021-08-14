import React, { useEffect, useState } from 'react';

// Components
import { Header } from '../../components';
import { SideMenu } from '../sideMenu';

// Stores
import { history } from '../../stores';

interface MainContainerProps {
	child?: any;
	styles?: object;
}

export const MainContainer = (props: MainContainerProps) => {
	const { child, styles } = props;
	const [ userToken, setUserToken ] = useState(null);
	useEffect(() => {
		const token: any = localStorage.getItem('token');
		setUserToken(token);
		if (!token) return history.push('/');
	}, []);
	return (
		<div className="main-container">
			{/* Header */}
			<Header token={userToken} />
			<div className="side">
				{/* Side Menu */}
				<SideMenu />
				<div className={'main-content'} style={{ flex: 1, display: 'flex', ...styles }}>
					{child ? child() : null}
				</div>
			</div>
		</div>
	);
};

export default MainContainer;

import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';

// Components
import { ExploreContainer } from '../../components';
import { ExploreForm } from './form';
import { data } from './data';

const renderChild = ({ userToken }: any) => {
	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				alignItems: 'center'
			}}
		>
			{/* Explore Images from other User */}
			<div
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex'
				}}
			>
				{data && <ExploreForm userToken={userToken} />}
			</div>
		</div>
	);
};

const ExplorePage = () => {
	const [ userToken, setUserToken ] = useState('');

	useEffect(() => {
		const token: any = localStorage.getItem('token');
		setUserToken(token);
	}, []);

	return <ExploreContainer userToken={userToken} child={() => renderChild({ userToken })} />;
};

export default observer(ExplorePage);

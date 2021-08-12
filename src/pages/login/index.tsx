import React from 'react';
import { observer } from 'mobx-react';

// Components
import { LoginContainer } from '../../components';
import LoginForm from './form';

const renderChild = () => {
	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				alignItems: 'center'
			}}
		>
			{/* Login */}
			<div
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex'
				}}
			>
				<LoginForm />
			</div>
		</div>
	);
};

const LoginPage = () => {
	return <LoginContainer child={renderChild} />;
};

export default observer(LoginPage);

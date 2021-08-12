import React from 'react';

interface LoginContainerProps {
	child?: any;
}

export const LoginContainer = (props: LoginContainerProps) => {
	const { child } = props;
	return (
		<div className="login-container">
			{/* Child Props */}
			<div className='child'>
				{child ? child() : null}
			</div>
		</div>
	);
};

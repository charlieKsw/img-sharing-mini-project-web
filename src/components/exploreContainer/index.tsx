import React from 'react';
import { Header } from '..';

interface ExploreContainerProps {
	child?: any;
	styles?: object;
	userToken?: any;
}

export const ExploreContainer = (props: ExploreContainerProps) => {
	const { child, styles, userToken } = props;
	return (
		<div className="explore-container">
			{/* Header */}
			<Header token={userToken} />

			<div className="child">
				{/* Image Posts */}

				<div className="main-content" style={{ flex: 1, display: 'flex', ...styles }}>
					{child ? child() : null}
				</div>
			</div>
		</div>
	);
};

export default ExploreContainer;

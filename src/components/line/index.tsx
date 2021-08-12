import React from 'react';

interface LineProps {
	color?: string;
	width?: number | string;
	position?: string;
	height?: number;
}

export const Line = (props: LineProps) => {
	let { width, color, position, height } = props;
	let positionStyle: any = { display: 'flex' };
	if (position) {
		positionStyle = {
			...positionStyle,
			margin: '0 auto'
		};
	}

	return (
		<div style={{ padding: '20px 0 30px 0' }}>
			<span
				style={{
					width: width || 30,
					backgroundColor: color,
					height: height || 1,
					...positionStyle
				}}
			/>
		</div>
	);
};

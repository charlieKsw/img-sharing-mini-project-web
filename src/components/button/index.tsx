import React from 'react';
import { ButtonType, ButtonShape, ButtonHtmlType } from './types';
import { Button as AntdButton } from 'antd';

interface ButtonProps {
	type?: ButtonType;
	buttonName: any; //string;
	onClick?: React.MouseEventHandler<HTMLElement>;
	shape?: ButtonShape;
	disabled?: boolean;
	htmlType?: ButtonHtmlType;
	className?: string;
	style?: object;
	icon?: string;
	loading?: boolean;
}

export const Button = (props: ButtonProps) => {
	let { type, buttonName, onClick, shape, disabled, htmlType, className, style, loading } = props;
	return (
		<AntdButton
			type={type || 'primary'}
			onClick={onClick || undefined}
			shape={shape || undefined}
			disabled={disabled || false}
			htmlType={htmlType || 'button'}
			className={className || undefined}
			loading={loading}
			style={{
				...style
			}}
		>
			{buttonName}
		</AntdButton>
	);
};

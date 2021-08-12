import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { history } from '../../stores';
import { message } from 'antd';

// Components
import { Line, Form } from '../../components';
import { fields } from './fields';

// Store
import { useAuthStore } from '../../stores';

// Style
import { colors } from '../../config/style';

// Type Model
import { LoginResult } from '../../models/auth';

const LoginForm = () => {
	const { login, createUser } = useAuthStore();
	const [ isSignUp, setIsSignUp ] = useState(false);
	const onFinish = async (props: any) => {
		const { username, password } = props;
		if (isSignUp) {
			const result: any = await createUser(username, password);
			if (result && result['success']) {
				if (result['isDuplicated']) return message.error(`Sign up Failed - User email already exist.`);
				message.success(`Sign up success - please login to continue`);
				setIsSignUp(false);
				return history.push('/');
			}
			return message.error(`Sign Up failed - Please contact admin`);
		}

		const result: LoginResult = await login(username, password);
		if (result && result['success']) {
			if (result['redirect']) {
				message.success(`Login Success`);

				return history.push(result['redirect']);
			}
			return message.error(`Login Failed - Please contact admin`);
		}
		return message.error(`Login Failed - Incorrect email or password`);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div style={{ minWidth: 300 }}>
			<h2 style={{ color: colors.white }}>{isSignUp ? 'Sign Up' : 'Login'}</h2>
			<Line position={'center'} color={colors.white} height={2} />
			{/* Form */}
			<div style={{ maxWidth: 400 }}>
				<Form
					fields={fields}
					formName="login-form"
					isSignUp={isSignUp}
					setIsSignUp={setIsSignUp}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					submitBtnName={'Login'}
					submitBtnType="submit"
				/>
			</div>
		</div>
	);
};

export default observer(LoginForm);

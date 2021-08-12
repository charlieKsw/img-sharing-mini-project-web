import React, { useEffect, useState } from 'react';
// Type
import { iForm } from './types';
import { ButtonHtmlType } from '../button/types';

// Style
import { Form as AntdForm, Input, InputNumber, Select } from 'antd';
import { Button } from '../';
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined, LockTwoTone } from '@ant-design/icons';
import { colors } from '../../config/style';

// Utils
import { toCamelCase } from '../../utils/transformText';

interface FormProps {
	fields: Array<iForm>;
	isSignUp: boolean;
	setIsSignUp: Function;
	formName: string;
	formStyle?: object;
	onChange?: any;
	onFinish: any;
	onFinishFailed?: any;
	submitBtnName: string;
	submitBtnType: ButtonHtmlType;
	options?: Array<any>;
}
const { Option } = Select;

export const Form = (props: FormProps) => {
	let {
		fields: itemFields,
		formName,
		formStyle,
		onChange,
		onFinish,
		onFinishFailed,
		isSignUp,
		setIsSignUp,
		submitBtnName,
		submitBtnType
	} = props;

	const [ form ] = AntdForm.useForm();
	const [ forDependsOption, setForDependsOption ] = useState<any>({});

	useEffect(() => {}, [ forDependsOption ]);

	const renderPrefix = (type: string) => {
		switch (type) {
			case 'username':
			case 'fullName':
				return <UserOutlined className="site-form-item-icon" />;
			case 'phone':
				return <PhoneOutlined className="site-form-item-icon" />;
			case 'level':
				return <LockTwoTone className="site-form-item-icon" />;
			case 'email':
				return <MailOutlined className="site-form-item-icon" />;
			case 'password':
			case 'confirmPassword':
				return <LockOutlined className="site-form-item-icon" />;
			default:
				return null;
		}
	};

	const handleInputChange = (type: string, dependsOnField: string, fieldName: any, inputValue: any) => {
		let object: any = { [fieldName]: inputValue };
		setForDependsOption({
			...forDependsOption,
			...object
		});
	};
	const submitForm = (param: any) => {
		onFinish && onFinish(param);
		form.resetFields();
	};
	const handleSignUp = (isSignUp: any) => {
		if (!isSignUp) return setIsSignUp(true);
	};
	const onSignUpClick = () => {
		form.resetFields();
		handleSignUp(isSignUp);
	};
	return (
		<div>
			<AntdForm
				form={form}
				name={formName}
				style={formStyle || {}}
				onFinish={submitForm}
				onFinishFailed={onFinishFailed || undefined}
				onChange={onChange || undefined}
			>
				{/* Fields */}
				{itemFields.map((field: any) => {
					const { id, name, optionName = '', rules, type, dependsOnField } = field;
					let { options } = field;
					let { value } = field;
					let fieldName = toCamelCase(name.toLowerCase());
					// Just for options
					const optionTypes = [ 'parentOptions', 'depandsOptions', 'options' ];

					let optionsValue = optionTypes.includes(type) ? forDependsOption[fieldName] || value : '';

					return (
						<AntdForm.Item name={fieldName} rules={[ rules || { required: false } ]} key={id} hasFeedback>
							{type === 'number' ? (
								<InputNumber
									key={`input${id}`}
									max={field.max}
									min={field.min}
									placeholder={name}
									style={{ fontSize: 12, width: '100%' }}
								/>
							) : optionTypes.includes(type) ? (
								<Select
									onChange={(value) => handleInputChange(type, dependsOnField, fieldName, value)}
									value={optionsValue}
									style={{ width: '100%' }}
									placeholder={name}
									key={`input${id}`}
								>
									{options &&
										options.length > 0 &&
										options.map((option: any) => {
											return (
												<Option
													key={optionName ? `input${option.id}` : `inputOption${option}`}
													value={optionName ? option.id : option}
												>
													{optionName ? option[`${optionName}`] : option}
												</Option>
											);
										})}
								</Select>
							) : (
								<Input
									key={`input${id}`}
									placeholder={name}
									value={value ? value : null}
									type={type}
									style={{ fontSize: 12 }}
									prefix={renderPrefix(fieldName)}
								/>
							)}
						</AntdForm.Item>
					);
				}, [])}

				{/* Complete */}
				<AntdForm.Item>
					<Button
						className="form-footer-button"
						buttonName={isSignUp ? 'Sign Up' : submitBtnName}
						htmlType={submitBtnType}
					/>
					{/* Show Sign up option for new user */}
					{!isSignUp ? (
						<span style={{ color: colors.white }}>
							Don't have account yet?
							<u onClick={() => onSignUpClick()} className="sign-up-hover">
								Sign Up now
							</u>
						</span>
					) : (
						/* Back to Login Page */
						<Button
							buttonName={'Login'}
							htmlType={submitBtnType}
							onClick={() => setIsSignUp(false)}
							style={
								!isSignUp ? (
									{
										borderColor: colors.linearGreen,
										backgroundImage: 'linear-gradient(90deg, #09daea 0%, #78e289 100%) '
									}
								) : (
									{
										borderColor: colors.lightBlue,
										background: colors.lightBlue
									}
								)
							}
						/>
					)}
				</AntdForm.Item>
			</AntdForm>
		</div>
	);
};

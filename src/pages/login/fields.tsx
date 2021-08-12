// Fields for forms
const fields = [
	{
		id: 1,
		name: 'Username',
		type: 'text',
		rules: { required: true, message: 'Please input email !' }
	},
	{
		id: 2,
		name: 'Password',
		type: 'password',
		rules: { required: true, message: 'Please input password !' }
	}
];

export { fields };

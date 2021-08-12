const fields = [
	{
		name: 'User ID',
		editable: false,
		dataKey: 'user_id',
		width: 300,
		fieldType: 'redirection_action'
	},
	{
		name: 'Email',
		editable: false,
		dataKey: 'email',
		width: 300
	},
	{
		name: 'Token',
		editable: false,
		dataKey: 'token_code',
		width: 150,
		fieldType: 'token_filter'
	},
	{
		name: 'Amount',
		editable: false,
		dataKey: 'delta',
		width: 200,
		caldiff: 'true'
	},
	{
		name: 'Completed',
		editable: false,
		dataKey: 'completed',
		width: 100
	},
	{
		name: 'Status',
		editable: false,
		dataKey: 'status',
		width: 150
	},
	{
		name: 'Modified At',
		editable: false,
		dataKey: 'modified_at',
		width: 150,
		fieldType: 'datetime'
	},
	{
		name: 'Action',
		editable: false,
		dataKey: 'withdraw-action',
		width: 250,
		fieldType: 'withdraw-action'
	}
];

export default fields;

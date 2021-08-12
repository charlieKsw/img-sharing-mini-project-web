import React from 'react';

// Components
import { Input } from 'antd';

interface SearchProps {
	placeholder?: string;
	onChange?: any;
	onSearch(value: any, event: any): void;
	width?: string | number;
}

export const Search = (props: SearchProps) => {
	let { placeholder, onChange, onSearch, width } = props;
	return (
		<div style={{ width: width || 300 }}>
			<Input.Search
				placeholder={placeholder || 'Search'}
				onChange={onChange}
				onSearch={onSearch}
				style={{ paddingLeft: 0 }}
			/>
		</div>
	);
};

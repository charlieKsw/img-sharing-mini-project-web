import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { message, Spin } from 'antd';

// Components
import { HeaderIcon, MediaPostAppsIcon, MediaPostHeadlineIcon } from '../../components';

//Store
import { useMediaPostStore } from '../../stores';
import { BasicResult } from '../../models/general';

interface HomeFormProps {
	dataList: Array<object>;
	setData?: any;
	getData?: any;
	isLoading: boolean;
}

const HomeForm = (props: HomeFormProps) => {
	const { getData, dataList, isLoading } = props;
	const { createMediaPost } = useMediaPostStore();
	const [ formType, setFormType ] = useState('AppsIcon');
	const [ addPost, setAddPost ] = useState(false);
	const [ isCancel, setIsCancel ] = useState(false);

	const onFinish = useCallback(
		async (values: any) => {
			const { imgUrl, description } = values;
			const result: BasicResult = await createMediaPost(imgUrl, description);
			if (result && result['success']) {
				setAddPost(false);
				setFormType('AppsIcon');
				getData();
				return message.success(`Submit Success`);
			}
			return message.error(`Submit Failed`);
		},
		[ getData, setFormType, setAddPost, createMediaPost ]
	);

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className="flex-column">
			<div className="header-fonts-container">
				<h2>{dataList.length > 0 ? `${dataList.length} POST` : `0 POST`}</h2>
				<HeaderIcon formType={formType} setFormType={setFormType} />
			</div>

			{/* Spinner */}
			{isLoading && <Spin className="table-loader" />}

			{formType === 'headlineIcon' ? (
				<MediaPostHeadlineIcon
					dataList={dataList}
					isLoading={isLoading}
					addPost={addPost}
					isCancel={isCancel}
					setAddPost={setAddPost}
					setIsCancel={setIsCancel}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				/>
			) : (
				<MediaPostAppsIcon dataList={dataList} />
			)}
		</div>
	);
};

export default observer(HomeForm);

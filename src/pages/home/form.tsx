import React, { useCallback, useEffect, useState } from 'react';
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
	const { setData, getData, dataList, isLoading } = props;
	const { getMediaPost, createMediaPost, deleteMediaPost } = useMediaPostStore();
	const [ formType, setFormType ] = useState('AppsIcon');
	const [ addPost, setAddPost ] = useState(false);
	const [ isCancel, setIsCancel ] = useState(false);

	const onPostCreate = useCallback(
		async (values: any) => {
			const { imgUrl, description } = values;
			const result: BasicResult = await createMediaPost(imgUrl, description);
			if (result && result['success']) {
				message.success(`Submit Success`);
				setFormType('AppsIcon');
				setAddPost(false);

				/* Get dataList once post successfully created */
				const fetchPost: any = await getMediaPost();
				if (fetchPost && fetchPost['success']) {
					return setData(fetchPost['userPost']);
				}
				setData(null);
				return message.error(`Failed to get post`);
			}
			return message.error(`Submit Failed`);
		},
		[ setData, getMediaPost, setFormType, setAddPost, createMediaPost ]
	);

	const onPostDelete = useCallback(
		async (id: number) => {
			const result: BasicResult = await deleteMediaPost(id);
			if (result && result['success']) {
				message.success(`Delete post successfully`);
				/* Get dataList once post successfully deleted */
				const fetchPost: any = await getMediaPost();
				if (fetchPost && fetchPost['success']) {
					return setData(fetchPost['userPost']);
				}
				setData(null);
				return message.error(`Failed to get post`);
			}
			return message.error(`Failed to delete post, please try again`);
		},
		[ setData, getMediaPost, deleteMediaPost ]
	);

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	useEffect(
		() => {
			if (!dataList) {
				getData();
			}
		},
		[ getData, dataList, onPostCreate, onPostDelete ]
	);

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
					onPostDelete={onPostDelete}
					setAddPost={setAddPost}
					setIsCancel={setIsCancel}
					onFinish={onPostCreate}
					onFinishFailed={onFinishFailed}
				/>
			) : (
				<MediaPostAppsIcon dataList={dataList} />
			)}
		</div>
	);
};

export default observer(HomeForm);

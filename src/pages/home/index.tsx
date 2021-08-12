import React, { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';

// Components
import { MainContainer } from '../../components';
import HomeForm from './form';
import { message } from 'antd';

// Store
import { useMediaPostStore } from '../../stores';

const renderChild = ({ data, setData, getData, isLoading }: any) => {
	return <HomeForm dataList={data || []} setData={setData} getData={getData} isLoading={isLoading} />;
};

const HomePage = () => {
	const { getMediaPost } = useMediaPostStore();
	const [ isLoading, setIsLoading ] = useState<boolean>(false);
	const [ data, setData ] = useState<null | Array<any>>(null);

	const getData = useCallback(
		async () => {
			setIsLoading(true);
			const result: any = await getMediaPost();
			setData(null);
			if (result['success'] && result['userPost']) {
				setIsLoading(false);
				return setData(result['userPost']);
			}

			return message.error(`Failed to load media posts`);
		},
		[ setData, getMediaPost ]
	);

	useEffect(
		() => {
			if (!data) {
				getData();
			}
		},
		[ data, getData ]
	);

	return (
		<MainContainer
			child={() =>
				renderChild({
					data: data || [],
					isLoading,
					setData,
					getData
				})}
		/>
	);
};

export default observer(HomePage);

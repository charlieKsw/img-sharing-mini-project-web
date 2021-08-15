import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '..';
import { UploadPostForm } from '../uploadPost';
import moment from 'moment';

// Icon
import { DeleteOutlined } from '@ant-design/icons';

// Post Items
// import posts from './posts';

interface MediaPostHeadlineIconProps {
	addPost: any;
	setAddPost: any;
	isCancel: any;
	setIsCancel: any;
	onFinish: any;
	onFinishFailed: any;
	dataList: any;
	isLoading: boolean;
	onPostDelete: any;
}

export const MediaPostHeadlineIcon = (props: MediaPostHeadlineIconProps) => {
	const {
		onPostDelete,
		isLoading,
		dataList,
		addPost,
		setAddPost,
		isCancel,
		setIsCancel,
		onFinish,
		onFinishFailed
	} = props;

	const handleAddPost = () => {
		setAddPost(true);
		setIsCancel(false);
	};
	return (
		<div className="headlineIcon-wrapper">
			{!addPost &&
			!isLoading && (
				<Button onClick={() => handleAddPost()} className="add-post-button" buttonName="Add Post +" />
			)}

			{addPost &&
			!isCancel && (
				<UploadPostForm
					submitBtnName={'Submit'}
					isCancel={isCancel}
					setAddPost={setAddPost}
					setIsCancel={setIsCancel}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					submitBtnType={'submit'}
				/>
			)}

			{dataList &&
				dataList.length > 0 &&
				dataList.map((item: any, index: number) => {
					return (
						<Card key={index} className="root">
							<CardHeader
								avatar={
									<Avatar aria-label="recipe" className="avatar">
										{item.email.slice(0, 1).toUpperCase()}
									</Avatar>
								}
								action={
									<IconButton onClick={() => onPostDelete(item.id)} aria-label="settings">
										<DeleteOutlined />
									</IconButton>
								}
								title="Rain"
								subheader={moment(item.create_date).format('YYYY-MM-DD')}
							/>
							<CardMedia className="media img-fluid" image={item.image_url} title={'post'} />
							<CardContent>
								<Typography variant="body2" color="initial" component="q">
									{item.description}
								</Typography>
							</CardContent>
							<div className="card-content">
								<div className="flex-row">
									<FavoriteIcon color="error" />
									<h6>{item.id} Likes</h6>
								</div>
								<div className="date">
									<h6 style={{ marginLeft: 4 }}>{moment(item.create_date).format('YYYY-MM-DD')}</h6>
								</div>
							</div>
						</Card>
					);
				})}
		</div>
	);
};

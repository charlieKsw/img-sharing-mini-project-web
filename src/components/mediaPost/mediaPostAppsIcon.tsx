import React from 'react';
import { Row } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

// Post Items
// import posts from './posts';

//Style
import { colors } from '../../config/style';

interface AppsIconProps {
	dataList: Array<object>;
}
const useStyles = makeStyles((theme: any) => ({
	root: {
		paddingRight: 40,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden'
	},
	gridList: {
		height: 'auto'
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)'
	},
	image: {
		maxWidth: 185,
		maxHeight: 185,
		margin: 20,
		border: `5px solid ${colors.white}`,
		borderRadius: 5,
		'&:hover': {
			opacity: 0.25
		}
	}
}));

export const MediaPostAppsIcon = (props: AppsIconProps) => {
	const { dataList } = props;
	const classes = useStyles();
	return (
		<Row className="appsIcon-wrapper">
			<div className={classes.root}>
				<ImageList rowHeight={255} className={classes.gridList} cols={5}>
					{dataList &&
						dataList.length > 0 &&
						dataList.map((item: any) => (
							<ImageListItem key={item.id}>
								<img className={`${classes.image} img-posts img-fluid`} src={item.image_url} alt="" />
							</ImageListItem>
						))}
				</ImageList>
			</div>
		</Row>
	);
};

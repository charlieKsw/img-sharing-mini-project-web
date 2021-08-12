import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { data } from './data';

const useStyles = makeStyles((theme: any) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		height: 'auto'
	},
	blur: {
		filter: `blur(8px)`
	},
	image: {
		'&:hover': {
			opacity: 0.25
		}
	}
}));

export const ExploreForm = (props: any) => {
	const { userToken } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ImageList rowHeight={420} className={classes.gridList} cols={3}>
				<ImageListItem
					key="Subheader"
					cols={3}
					style={{ height: 'auto', textAlign: 'center', fontWeight: 'bold' }}
				>
					{/* User need to login to review user post */}
					<ListSubheader component="div">
						{!userToken ? 'Please login to see user posts...' : ''}
					</ListSubheader>
				</ImageListItem>

				{data &&
					data.length > 0 &&
					data.map((tile: any) => (
						<ImageListItem key={tile.id}>
							<img
								className={!userToken ? classes.blur : classes.image}
								src={tile.img}
								alt={tile.title}
							/>

							{/* Start Title of image*/}
							<ImageListItemBar
								style={{ textAlign: 'center' }}
								title={tile.title}
								subtitle={<span>{tile.author}</span>}
							/>
							{/* End Title of image*/}
						</ImageListItem>
					))}
			</ImageList>
		</div>
	);
};

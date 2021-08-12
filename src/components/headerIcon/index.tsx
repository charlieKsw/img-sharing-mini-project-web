import React from 'react';

// Icon
import AppsIcon from '@material-ui/icons/Apps';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

export const HeaderIcon = (props: any) => {
	const { formType, setFormType } = props;
	return (
		<div className="header-icon-container">
			<div
				onClick={() => setFormType('appsIcon')}
				className={formType === 'appsIcon' ? `header-icon-switch-active` : 'header-icon-switch'}
			>
				<AppsIcon className="icon-space" fontSize="large" />
			</div>

			<div
				onClick={() => setFormType('headlineIcon')}
				className={formType === 'headlineIcon' ? `header-icon-switch-active` : 'header-icon-switch'}
			>
				<ViewHeadlineIcon className="icon-space" fontSize="large" />
			</div>
		</div>
	);
};

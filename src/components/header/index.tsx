import React, { useEffect, useState } from 'react';

// Components
import { Avatar, Dropdown, Menu } from 'antd';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import { history } from '../../stores/router';

//Style
import IconButton from '@material-ui/core/IconButton';
import { Button } from '..';
import { colors } from '../../config/style';

interface HeaderProps {
	token?: any;
}
export const Header = (props: HeaderProps) => {
	const { token } = props;
	const [ lastNameChar, setLastNameChar ] = useState('A');

	useEffect(() => {
		const lastName = localStorage.getItem('lastName');
		lastName && lastName[0] && setLastNameChar(lastName[0].toUpperCase());
	}, []);

	const toPage = (page: string) => {
		let redirection = null;
		switch (page) {
			case 'logout':
				localStorage.clear();
				redirection = `/`;
				break;
			case 'explore':
				redirection = `/explore`;
				break;
			case 'home':
				redirection = `/home`;
				break;
			default:
		}
		redirection && history.push(redirection);
	};

	const settingMenu = (
		<Menu>
			<Menu.Item key="1" className={'setting-menu-item logout'} onClick={() => toPage('logout')}>
				Logout
			</Menu.Item>
		</Menu>
	);

	return (
		<div className="header">
			{/* Logo */}
			<div className="header-components-container">
				<IconButton onClick={() => toPage('home')}>
					<HomeIcon fontSize="large" color="action" />
				</IconButton>
			</div>
			<h2 className="header-title">InstaPic</h2>
			{/* Explore Page Button */}
			<div className="flex-end-button-container">
				{/* Login */}
				{!token && (
					<Button
						onClick={() => history.push('login')}
						buttonName={'Login'}
						style={{
							width: 75,
							fontWeight: 'bold',
							borderColor: colors.white,
							backgroundColor: colors.primary,
							borderRadius: 5,
							marginLeft: '12px'
						}}
					/>
				)}
				{/* Explore */}
				<IconButton onClick={() => toPage('explore')}>
					<ExploreIcon fontSize="large" color="action" />
				</IconButton>
				{/* Avatar */}
				{token && (
					<div className="name-container">
						<Dropdown overlay={settingMenu} trigger={[ 'click' ]}>
							<Avatar className="avatar" size="large">
								{lastNameChar}
							</Avatar>
						</Dropdown>
					</div>
				)}
			</div>
		</div>
	);
};

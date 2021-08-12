import React, { useState } from 'react';

// Menu Items
import people from './people';

import { colors, profilePicture } from '../../config/style';
import { Button } from '..';
import { Input } from 'antd';

const LOGO = `assets/${profilePicture}`;

interface SideMenuProps {}

export const SideMenu = (props: SideMenuProps) => {
	const [ bioText, setBioText ] = useState('✨Live a life you will remember✨');
	const [ changeBioText, setChangeBioText ] = useState(false);

	const handleBioTextChange = (e: any) => {
		if (e.target.value.length > 0) return setBioText(e.target.value);
		setBioText('');
	};

	const onBioTextClick = (changeBioText: any) => {
		if (changeBioText) return setChangeBioText(false);
		setChangeBioText(true);
	};

	return (
		<div className="side-menu">
			<img src={LOGO} className="logo-position img-fluid" alt={'header-logo'} />

			<div className="profile-container">
				<div className="bio-box">
					<div>
						<h6>
							Rain <br />A Dog person
						</h6>
						<Input
							style={{
								backgroundColor: colors.white,
								borderRadius: 5,
								height: 40,
								marginTop: 8,
								fontSize: 14,
								fontWeight: 'bold'
							}}
							value={bioText}
							onChange={(e: any) => handleBioTextChange(e)}
							disabled={changeBioText ? false : true}
						/>
						<br />
						<Button
							onClick={() => onBioTextClick(changeBioText)}
							buttonName={changeBioText ? 'Confirm' : 'Edit Bio'}
							className="edit-profile"
						/>
						<div className="profile-followers">
							<div className="follower-number">
								<span>2000</span> <br />Follower
							</div>
							<div className="following-number">
								<span>650</span>
								<br />Following
							</div>
						</div>
						<span>Username: rainIsHere</span>
					</div>
				</div>
			</div>
			<div className="side-menu-footer-container">
				<h2>DISCOVER PEOPLE</h2>
				{people.length > 0 &&
					people.map((item: any) => {
						return (
							<div className="img-wrapper" key={item.id}>
								<img src={item.src} className="discover-people-img img-fluid" alt={'header-logo'} />
								<div className="people-list">
									<span className="discover-people-name">{item.name.toUpperCase()}</span>
									<span className="discover-people-username">{item.username.toLowerCase()}</span>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

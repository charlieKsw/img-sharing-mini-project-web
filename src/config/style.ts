require('dotenv').config();

let {
	REACT_APP_BUTTON_COLOR,
	REACT_APP_LINEAR_COLOR,
	REACT_APP_TIFFANY_BLUE_COLOR,
	REACT_APP_PRIMARY_COLOR,
	REACT_APP_LIGHT_BLUE_COLOR,
	REACT_APP_LIGHT_GREEN_COLOR,
	REACT_APP_SECONDARY_COLOR,
	REACT_APP_BACKGROUND_COLOR,
	REACT_APP_WHITE_COLOR,
	REACT_APP_TITLE_FONT_FAMILY,
	REACT_APP_TITLE_FONT_SIZE,
	REACT_APP_SUBTITLE_FONT_FAMILY,
	REACT_APP_SUBTITLE_FONT_SIZE,
	REACT_APP_TEXT_FONT_FAMILY,
	REACT_APP_TEXT_FONT_SIZE,
	REACT_APP_HOME_NAME,
	REACT_APP_PROFILE_PICTURE_NAME,
	REACT_APP_DISCOVER_PEOPLE_1_NNAME,
	REACT_APP_DISCOVER_PEOPLE_2_NNAME,
	REACT_APP_DISCOVER_PEOPLE_3_NNAME,
	REACT_APP_DISCOVER_PEOPLE_4_NNAME,
	REACT_APP_LABEL_COLOR,
	REACT_APP_SUCCESS_COLOR,
	REACT_APP_DANGER_COLOR
} = process.env;

const colors = {
	button: REACT_APP_BUTTON_COLOR || '#0dbab1',
	linearGreen: REACT_APP_LINEAR_COLOR || '#78e289',
	tiffanyBlue: REACT_APP_TIFFANY_BLUE_COLOR || '#21D4FD',
	lightBlue: REACT_APP_LIGHT_BLUE_COLOR || '#3e6d9c',
	lightGreen: REACT_APP_LIGHT_GREEN_COLOR || '#09daea',
	primary: REACT_APP_PRIMARY_COLOR || '#23a883',
	secondary: REACT_APP_SECONDARY_COLOR || '#49b395',
	lightBg: REACT_APP_SECONDARY_COLOR || '#144654',
	background: REACT_APP_BACKGROUND_COLOR || '#0D282F',
	darkBg: REACT_APP_BACKGROUND_COLOR || '#021921',
	white: REACT_APP_WHITE_COLOR || '#fff',
	label: REACT_APP_LABEL_COLOR || '#b8b9ba',
	success: REACT_APP_SUCCESS_COLOR || '#33D68A',
	danger: REACT_APP_DANGER_COLOR || '#fc6058'
};

const homeLogo = REACT_APP_HOME_NAME || 'home.png';
const profilePicture = REACT_APP_PROFILE_PICTURE_NAME || 'profilePic.png';
const discoverPeople_1 = REACT_APP_DISCOVER_PEOPLE_1_NNAME || 'profile-pic-1.png';
const discoverPeople_2 = REACT_APP_DISCOVER_PEOPLE_2_NNAME || 'profile-pic-2.png';
const discoverPeople_3 = REACT_APP_DISCOVER_PEOPLE_3_NNAME || 'profile-pic-3.png';
const discoverPeople_4 = REACT_APP_DISCOVER_PEOPLE_4_NNAME || 'profile-pic-4.png';

const userPhoto_1 = 'user_photo_1.jpg';
const userPhoto_2 = 'user_photo_2.jpg';
const userPhoto_3 = 'user_photo_3.jpg';
const userPhoto_4 = 'user_photo_4.jpg';
const userPhoto_5 = 'user_photo_5.jpg';
const userPhoto_6 = 'user_photo_6.jpg';
const userPhoto_7 = 'user_photo_7.jpg';
const userPhoto_8 = 'user_photo_8.jpg';
const userPhoto_9 = 'user_photo_9.jpg';

const fonts = {
	titleFontFamily: REACT_APP_TITLE_FONT_FAMILY || 'Roboto',
	titleFontSize: REACT_APP_TITLE_FONT_SIZE || 24,
	subtitleFontFamily: REACT_APP_SUBTITLE_FONT_FAMILY || 'Roboto',
	subtitleFontSize: REACT_APP_SUBTITLE_FONT_SIZE || 16,
	textFontFamily: REACT_APP_TEXT_FONT_FAMILY || 'Helvetica',
	textFontSize: REACT_APP_TEXT_FONT_SIZE || 14
};

export {
	colors,
	fonts,
	homeLogo,
	profilePicture,
	discoverPeople_1,
	discoverPeople_2,
	discoverPeople_3,
	discoverPeople_4,
	userPhoto_1,
	userPhoto_2,
	userPhoto_3,
	userPhoto_4,
	userPhoto_5,
	userPhoto_6,
	userPhoto_7,
	userPhoto_8,
	userPhoto_9
};

require('dotenv').config();

let { REACT_APP_API_ENDPOINT } = process.env;

const api = {
	path: 'http://localhost:4001' || REACT_APP_API_ENDPOINT // You can set up your own default port
};

export { api };

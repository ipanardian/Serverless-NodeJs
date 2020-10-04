'use strict';

global.fetch = require('node-fetch')
const API_URL = 'https://jsonplaceholder.typicode.com'

module.exports.users = async event => {

	const users = await getUsers()

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Users retrieved successfully!',
			users: users
		},
		null,
		2
		),
	};
};

module.exports.posts = async event => {

	const posts = await getPosts()

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Posts retrieved successfully!',
			posts: posts
		},
		null,
		2
		),
	};
};

const getUsers = async () => {
	return fetch(`${API_URL}/users`).then(response => response.json())
}

const getPosts = async () => {
	return fetch(`${API_URL}/posts`).then(response => response.json())
}
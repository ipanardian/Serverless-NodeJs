'use strict';

global.fetch = require('node-fetch')
const API_URL = 'https://jsonplaceholder.typicode.com'

module.exports.users = async event => {

	const users = await getUsers();

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Users retrieved successfully!',
			data: users
		},
		null,
		2
		),
	};
};

module.exports.posts = async event => {

	const posts = await getPosts();

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Posts retrieved successfully!',
			data: posts
		},
		null,
		2
		),
	};
};

module.exports.showPost = async event => {

	const post = await getDetailPost(event.pathParameters.id);

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Post retrieved successfully!',
			data: post
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

const getDetailPost = async (id) => {
	return fetch(`${API_URL}/posts/${id}`).then(response => response.json())
}
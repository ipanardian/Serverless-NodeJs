'use strict';

global.fetch = require('node-fetch')
const API_URL = 'https://jsonplaceholder.typicode.com'

module.exports.users = async event => {

  const getUsers = () => {
    return fetch(`${API_URL}/users`).then(response => response.json())
  }

  const users = await getUsers()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless! Your function executed successfully!',
        input: event,
        users: users
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
};

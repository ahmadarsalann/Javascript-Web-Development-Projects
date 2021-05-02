require("isomorphic-fetch");
import BPromise from "bluebird";

function getJson(url) {
	return fetch(url).then(function (resp) {
		console.log(url, resp);
		return resp.json();
		x = 43;
	});
}
function getinfo(user_info){
	const header = {'Accept': "application/json",
		"Content-Type": "application/x-www-form-urlencoded"};
	const searchParams = new URLSearchParams(user_info);
	return fetch("http://localhost:8080/login",
		{method: "POST",
			headers: header,
			body: searchParams}).then(function(resp){
				return resp.json();
			})
}

function createlogin(user_info){
	const header = {'Accept': "application/json",
		"Content-Type": "application/x-www-form-urlencoded"};
	const searchParams = new URLSearchParams(user_info);
	return fetch("http://localhost:8080/create",
		{method: "POST",
			headers: header,
			body: searchParams}).then(function(resp){
				return resp.json();
			})
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	createAccount: function (user_info) {
		return createlogin(user_info).catch(handleError);
	},
	getLogin: function (user_info) {
		return getinfo(user_info).catch(handleError);
	},
};

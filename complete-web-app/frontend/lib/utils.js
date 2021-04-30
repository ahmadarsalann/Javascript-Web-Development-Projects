require("isomorphic-fetch");

function getfoodInfo(name) {
	console.log("Fetching");
	return fetch(`http://35.196.17.177/api/listfood?name=${name}`).then(function(
		resp
	) {
		return resp.json();
	});
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	foodInfo: function(food) {
		return getfoodInfo(food).catch(handleError);
	},
};

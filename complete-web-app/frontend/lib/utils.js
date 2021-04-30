require("isomorphic-fetch");

function getfoodInfo(name) {
	console.log("Fetching");
	return fetch(`http://localhost:8080/listfood?name=${name}`).then(function(
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

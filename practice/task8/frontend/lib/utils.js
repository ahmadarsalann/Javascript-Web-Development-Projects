require("isomorphic-fetch");

function getCampgroundInfo(name) {
	  console.log("Fetching");
	  return fetch(`http://35.190.190.219/api/info?q=${name}`).then(function(
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
	  getInfo: function(campground) {
		      return getCampgroundInfo(campground).catch(handleError);
		    },
};

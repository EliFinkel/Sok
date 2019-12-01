//libe/middleware/cleanGetQuery.js

function cleanGetQuery(query){
	let newQuery = {};
	Object.keys(query).forEach((key) =>{
		let keyValue = query[key];

		if (typeof keyValue != "undefined"){
			newQuery[key] = keyValue;
		}

	});

return newQuery;
};

module.exports = cleanGetQuery;

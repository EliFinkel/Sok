// lib/middleware/Crud.js

let MessageModel = require('../../models/MessageModel.js');


function create(document){
	return new Promise((resolve, reject)=>{
		console.log(document)
		MessageModel.create(document).then((res)=>{
			resolve(`MessageModel Document Succesfully Created : ${res}`);
		}).catch((err) => {
			reject(`MessageModel Document Failed To Be Created ${err}`);
		});

	});
}


function read(document){
	return new Promise((resolve, reject)=>{
		MessageModel.find(document).then((res)=>{
			resolve(`MessageModel Document Read : ${res}`);
		}).catch((err) => {
			reject(`MessageModel Document Was Not Read ${err}`);
		});
	});
}

function _delete(document){
	return new Promise((resolve, reject) => {
		MessageModel.deleteMany(document).then((res)=>{
			resolve(JSON.stringify([`MessageModel Document Deleted`, res]));
		}).catch((err) => {
			reject(`MessageModel Document did not delete ${err}`);
		});



	});


}

module.exports = {
	create: create,
	read : read,
	_delete : _delete,
};
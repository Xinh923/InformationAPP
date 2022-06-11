'use strict';

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	return new Promise((resolve, reject) => {
		const db = uniCloud.database()
		const collection = db.collection('user').where(event).get({
			getCount: true
		}).then(res => {
			resolve(res)
		})
	})
	return event
};

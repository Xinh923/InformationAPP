'use strict';
const db = uniCloud.database()
const getNewsId = db.collection('newslist')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let res = await getNewsId.where({
		_id: event.id
	}).get()
	//返回数据给客户端
	return res
};

'use strict';
const db = uniCloud.database()
const getopticlist = db.collection('topicList')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let res = await getopticlist.where({}).get()
	//返回数据给客户端
	return res
};

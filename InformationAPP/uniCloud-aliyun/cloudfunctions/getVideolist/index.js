'use strict';
const db = uniCloud.database()
const getvideolist = db.collection('videoList')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let res = await getvideolist.where({}).get()
	//返回数据给客户端
	return res
};

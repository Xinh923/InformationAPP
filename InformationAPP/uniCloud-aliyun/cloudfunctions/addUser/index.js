'use strict';
const db = uniCloud.database()
const adduser = db.collection('user')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let res = await adduser.add(event);
	//返回数据给客户端
	return res
};

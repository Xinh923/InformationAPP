<template>
	<view>
		<view>
			<!--顶部视频部分-->
			<view class="spsy"></view>
			<!--第二部分-标题-->
			<view v-for="(item,i) in videolist" :key="i+'videolist'">
				<view>
					<video class="checkbox-item" style="width: 100%;height: 400rpx;" :src="item.videosrc"></video>
				</view>
				<view class="sp">
					<view class="b">{{item.adcontent}}</view>
					<view class="z">
						<view class="z-z">{{item.adnumber}}次播放</view>
						<view class="z-z">
							<image style="width:30rpx;height: 30rpx;" src="../../static/good.png"></image>3
						</view>
					</view>
					<!--第三部分-用户-->
					<view class="z">
						<view>
							<image style="width: 80rpx;height: 80rpx;border-radius: 50rpx;" :src="item.vdimage"></image>
						</view>
						<view class="z-h">
							<view>{{item.vdauthor}}</view>
							<view class="z-z">{{item.adtime}}</view>
						</view>
						<view class="reg-rigth">+关注</view>
					</view>
				</view>
			</view>

			<!--第四部分-推荐-->
			<view class="item">
				<view>为你推荐</view>
				<!--第四部分-1-->
				<view class="e-item">
					<view class="e">
						<image style="width: 200rpx;height: 200rpx;" src="../../static/logo.png"></image>
					</view>
					<view>
						<view class="e-rigth">大兴安岭出现超大型野兽，体重一吨比轿车还大，......</view>
						<view class="z">
							<view class="z-z1">动物大观察</view>
							<view class="z-z2">5.3万次播放</view>
						</view>
					</view>
				</view>
			</view>

			<!--第五部分-热门推荐-->
			<view style="color: #333; margin-bottom: 30rpx;margin-left: 20rpx;">热门评论</view>
			<!--第五部分-热门推荐-1-->
			<view class="p1">
				<view>
					<image style="width: 80rpx; height: 80rpx; margin-left:20rpx;" src="../../static/logo.png"></image>
				</view>
				<view class="lp">
					<view class="p11">
						<view>
							<view class="zt1">狐友879303</view>
							<view class="sj">
								<view class="sjs">1小时前</view>
								<view class="sjs">广西桂林市</view>
							</view>
						</view>
						<view class="p1">
							<view class="p111">3</view>
							<view class="p111">
								<image style="width: 30rpx;height: 30rpx;" src="../../static/logo.png"></image>
							</view>
							<view class="p111">
								<image style="width: 30rpx;height: 30rpx;" src="../../static/logo.png"></image>
							</view>
						</view>
					</view>
					<view class="p11">保命要紧，何机再起。</view>
				</view>
			</view>

			<view class="xhx"></view>
			<view class="jz">已加载全部</view>
			<view class="xhxx"></view>
			<!--第六部分-底部-->
			<view class="zdb">
				<view>

					<image style="width: 40rpx; height: 40rpx;" src="../../static/logo.png"></image>
				</view>
				<view class="left">
					<input type="text" style="width: 180rpx; margin-right:20rpx;font-size:25rpx;" placeholder="我来说两句"
						class="search_input"></input>
				</view>
				<view class="j1">
					<image style="width: 30rpx; height: 30rpx;" src="../../static/logo.png"></image>
				</view>
				<view class="j1">
					<image style="width: 40rpx; height: 40rpx;" src="../../static/logo.png"></image>
				</view>
				<view class="j1">
					<image style="width: 40rpx; height: 40rpx;" src="../../static/logo.png"></image>
				</view>
			</view>

		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				id: "",
				videolist: []
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getvideo(options.id);
			// console.log(this.id)
		},
		methods: {
			getvideo(_id) {
				uniCloud.callFunction({
					name: 'getvideoId',
					data: {
						"id": _id
					},
					success: (e) => {
						this.videolist = e.result.data;
					}
				})
			}
		}
	}
</script>

<style>
	.item {
		margin: 20rpx 20rpx 20rpx 20rpx;
	}

	.spsy {
		width: 100%;
		height: 400rpx;
	}

	.checkbox-item {
		position: fixed;
		top: 85rpx;
		z-index: 1;
		/*显示层级，设置在最上显示*/
	}

	.sp {
		margin: 20rpx;
		border-bottom: 1rpx solid #999999;
	}

	.b {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		font-size: 45rpx;
	}

	.reg-rigth {
		background: #DD524D;
		height: 50rpx;
		border-radius: 50rpx;
		color: #FFFFFF;
		width: 140rpx;
		text-align: center;
	}

	.c {
		display: flex;
		flex-direction: row;
	}

	.d {
		display: flex;
		flex-direction: row;
		border-bottom: 1rpx solid #d0d0d0;
	}

	.z {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 30rpx;
	}

	.z-h {
		margin-right: 210rpx;
	}

	.z-z1 {
		font-size: 30rpx;
		color: #C8C7CC;
		margin: 20rpx;
	}

	.z-z2 {
		font-size: 30rpx;
		color: #C8C7CC;
		margin: 20rpx;
	}

	.z-z {
		font-size: 30rpx;
		color: #C8C7CC;
	}

	.e-item {
		display: flex;
		flex-direction: row;
	}

	.e-rigth {
		margin: 20rpx;
		margin-top: 40rpx;
	}

	.e {
		margin-top: 30rpx;
	}

	.p1 {
		display: flex;
		flex-direction: ;
		margin-right: -280rpx;
		margin-bottom: 40rpx;
	}

	.lp {
		margin-left: -30rpx;
	}

	.p11 {
		display: flex;
		flex-direction: ;
		justify-content: space-between;
		-wekbet-justify-content: space-between;
		margin-left: 60rpx;
	}

	.p111 {
		margin-right: 50rpx;
	}

	.xhx {
		border-bottom: 1rpx solid #c0c0c0;
		margin: 0rpx 20rpx 20rpx 100rpx;
	}

	.xhxx {
		border-bottom: 1rpx solid #d5d5d5;
		margin: 0rpx 20rpx 20rpx 10rpx;
		margin-bottom: 40rpx;
	}

	.jz {
		color: #C0c0c0;
		margin-left: 120rpx;
		margin-bottom: 80rpx;
	}

	.zdb {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		width: 100%;
		height: 60rpx;
		position: fixed;
		bottom: 0rpx;
	}

	.search_input {
		background-color: #F8F8F8;
		/*背景颜色*/
		border-radius: 40rpx;
		/*设置边框圆角，半径*/
		padding: 5rpx 30rpx 6rpx 30rpx;
		/*内间距*/
		margin-right: 1rpx;
	}

	.zt1 {
		font-size: 30rpx;
		color: #007AFF;
		margin-top: 10rpx;
	}

	.left {
		height: 10rpx;
		margin-left: 20rpx;
	}

	.search_input {
		background-color: #F8F8F8;
		/*背景颜色*/
		border-radius: 40rpx;
		/*设置边框圆角，半径*/
		padding: 5rpx 30rpx 6rpx 30rpx;
		/*内间距*/
		margin-right: 1rpx;
	}

	.j1 {
		margin-left: 90rpx;
	}
</style>

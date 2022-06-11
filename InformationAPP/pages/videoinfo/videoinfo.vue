<template>
	<view>
		<view>
			<!--顶部视频部分-->
			<view class="spsy"></view>
			<!--第二部分-标题-->
			<view v-for="(item,i) in videodetaild" :key="i+'videodetaild'">
				<view>
					<video class="checkbox-item" style="width: 100%;height: 400rpx;" :src="item.videosrc"></video>
				</view>

				<view class="vd_details">
					<view class="ad_content">{{item.adcontent}}</view>
					<view class="ad_number">
						<view class="ad_hot">{{item.adnumber}}次播放</view>
						<view class="ad_dz">
							<image style="width:40rpx;height: 40rpx;" src="../../static/good.png"></image>
							<text>{{item.adpraise}}</text>
						</view>
					</view>
					<!--第三部分-用户-->
					<view class="ad_user">
						<view style="display: inline;float: left;">
							<view class="ad_image">
								<image style="width: 90rpx;height: 90rpx;border-radius: 50rpx;" :src="item.vdimage">
								</image>
							</view>
						</view>
						<view style="padding-left: 20rpx; width: 360rpx;display: inline;float: right;">
							<view class="ad_vdauthor">
								<text style="font-size: 35rpx;">{{item.vdauthor}}</text>
								<text style="color: #C0c0c0;font-size: 30rpx;">{{item.adtime}}</text>
							</view>
						</view>

						<view class="ad_care">
							<view @click="gz()" v-bind:class="className">
								{{care}}
							</view>
						</view>

					</view>
				</view>
			</view>

			<!--第四部分-推荐-->
			<view class="item">
				<view>为你推荐</view>
				<!--第四部分-1-->
				<view class="e-item" v-for="(item,i) in videolist.slice(4)" :key="i+'videolist'">
					<view class="e">
						<video style="width: 200rpx;height: 200rpx;" :src="item.videosrc"></video>
					</view>
					<view style="height: 200rpx;margin-top: 30rpx;margin-left: 15rpx;">
						<view style="font-size: 35rpx;height: 135rpx;text-overflow: ellipsis;overflow: hidden;">
							{{item.adcontent}}
						</view>
						<view class="z">
							<view class="z-z1">{{item.vdauthor}}</view>
							<view class="z-z2">{{item.adnumber}}次播放</view>
						</view>
					</view>
				</view>
			</view>

			<!--第五部分-热门推荐-->
			<view style="color: #333; margin-bottom: 30rpx;margin-left: 20rpx;">热门评论</view>
			<!--第五部分-热门推荐-1-->

			<view style="margin-bottom: 50rpx;margin-left: 20rpx;">
				<view class="pl" v-for="(item,i) in hotreview" :key="i+'hotview'">
					<view class="lp">
						<view class="pll">
							<view style=" display: inline-block;">
								<image style="width: 80rpx; height: 80rpx;border-radius: 50%;" :src="item.cmimage">
								</image>
							</view>
							<view style="margin-left: 20rpx;display: inline-block;">
								<view class="zt1">{{item.cmname}}</view>
								<view class="sj">
									<view class="sjs">{{item.cmtime}}</view>
									<view class="sjs">{{item.cmaddress}}</view>
								</view>
							</view>
							<view class="dz">
								<view class="cmhot">{{item.cmhot}}</view>
								<view class="plll">
									<image src="../../static/good.png"></image>
								</view>
								<view class="plll">
									<image src="../../static/comment.png"></image>
								</view>
							</view>
						</view>
						<view class="plcontent">{{item.cmcontent}}</view>
					</view>
				</view>
			</view>

			<view class="xhx"></view>
			<view class="jz">已加载全部</view>
			<view class="xhxx"></view>
			<!--第六部分-底部-->
			<view class="zdb">
				<view style="padding-left: 50rpx;margin-top: 5rpx;">
					<input type="text" style="width: 200rpx; 
					font-size: 25rpx;" placeholder="有和观点" class="search_input"></input>
				</view>
				<view style="margin-left: 100rpx;margin-top: 5rpx;">
					<image style="width: 40rpx; height: 40rpx;" src="../../static/comment.png"></image>
				</view>
				<view style="margin-left: 70rpx;">
					<image style="width: 45rpx; height: 45rpx;" src="../../static/clloection.png"></image>
				</view>
				<view class="jl">
					<image style="width: 40rpx; height: 40rpx;" src="../../static/share.png"></image>
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
				videodetaild: [],
				hotreview: [],
				videolist: [],
				care: "+关注",
				className: "v_care"
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getvideo(options.id);
			this.getvideolist();
			// console.log(this.id)
		},
		onShow() {
			this.getHotReview();
		},
		methods: {
			// 视频详情
			getvideo(_id) {
				uniCloud.callFunction({
					name: 'getvideoId',
					data: {
						"id": _id
					},
					success: (e) => {
						this.videodetaild = e.result.data;
					}
				})
			},
			// 点击关注效果
			gz() {
				this.care = "已关注";
				this.className = "check_class";
			},
			// 获取评论内容
			getHotReview() {
				uniCloud.callFunction({
					name: 'getHoretview',
					success: (e) => {
						this.hotreview = e.result.data;
					}
				})
			},
			// 获取推荐视频
			getvideolist() {
				uniCloud.callFunction({
					name: 'getVideolist',
					success: (e) => {
						this.videolist = e.result.data;
					}
				})
			}
		}
	}
</script>

<style>
	.spsy {
		width: 100%;
		height: 400rpx;
	}

	/* 视频显示区域 */
	.checkbox-item {
		position: fixed;
		top: 85rpx;
		z-index: 1;
		/*显示层级，设置在最上显示*/
	}

	.vd_details {
		margin: 30rpx 10rpx 30rpx 10rpx;
		padding-bottom: 30rpx;
		border-bottom: 1px solid #C0c0c0;
	}

	.ad_content {
		font-size: 40rpx;
	}

	.ad_number {
		height: 45rpx;
		color: #C0c0c0;
		margin: 10rpx 50rpx 20rpx 0rpx;
	}

	.ad_hot {
		display: inline;
		float: left;
		height: 45rpx;
		line-height: 45rpx;
		text-align: center;
		font-size: 35rpx;
		float: left;
	}

	.ad_dz {
		height: 45rpx;
		line-height: 45rpx;
		text-align: center;
		display: inline;
		float: right;
		margin-right: 50rpx;
	}

	.ad_dz image {
		margin-right: 20rpx;
	}

	.ad_dz text {
		font-size: 35rpx;
		float: right;
	}

	.ad_user {
		display: flex;
		height: 95rpx;
	}

	.ad_image {
		display: inline;
	}

	.ad_vdauthor {
		display: inline;
	}

	.ad_vdauthor text {
		display: block;
		width: 260rpx;
	}

	.ad_care {
		position: relative;
		height: 95rpx;
		width: 200rpx;
	}

	.v_care {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 140rpx;
		height: 50rpx;
		background: #DD524D;
		border-radius: 50rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 50rpx;
		font-size: 35rpx;
	}

	.check_class {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 140rpx;
		height: 50rpx;
		background: #A3A3A3;
		border-radius: 50rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 50rpx;
		font-size: 35rpx;
	}

	/* 为你推荐部分 */
	.item {
		margin: 20rpx 20rpx 20rpx 20rpx;
	}

	.e-item {
		display: flex;
		flex-direction: row;
	}

	.e {
		margin-top: 30rpx;
	}

	.z {
		margin: 20rpx 20rpx 0rpx 0rpx;
		color: #C0c0c0;
		height: 45rpx;
	}

	.z-z1 {
		display: inline;
		font-size: 35rpx;
		float: left;
	}

	.z-z2 {
		display: inline;
		font-size: 35rpx;
		float: right;
	}

	/* 热门评论部分 */
	.pl {
		margin-top: 10rpx;
		/* width: 700rpx; */
		margin-right: 20rpx;
	}

	.pll {
		display: inline-block;
		margin-left: 0rpx;
		width: 690rpx;
	}

	.plll {
		height: 40rpx;
		display: inline-block;
		margin-right: 50rpx;
		width: 40rpx;
		line-height: 40rpx;
		text-align: center;
		color: #999999;
	}

	.plll image {
		width: 35rpx;
		height: 35rpx;
	}

	.cmhot {
		display: inline-block;
		height: 35rpx;
		display: inline-block;
		margin-right: 50rpx;
		width: 35rpx;
		line-height: 35rpx;
		text-align: center;
		float: left;
		font-size: 16px;
	}

	.dz {
		float: right;
		margin-top: 10rpx;
		margin-right: 0rpx;
		display: inline-block;
	}

	.zt1 {
		width: 240rpx;
		font-size: 30rpx;
		color: #007AFF;
		margin-top: 10rpx;
	}

	.sj {
		color: #C8C7CC;
		font-size: 30rpx;
		display: flex;
		flex-direction: row;
		flex-grow: 1;
	}

	.sjs {
		margin-right: 30rpx;
		font-size: 20rpx;
		margin-top: 5rpx;
	}

	.plcontent {
		margin: 4rpx 70rpx 30rpx 100rpx;
	}

	.xhx {
		border-bottom: 1rpx solid #c0c0c0;
		margin: 0rpx 20rpx 20rpx 10rpx;
	}

	.xhxx {
		border-bottom: 1rpx solid #d5d5d5;
		margin: 0rpx 20rpx 20rpx 10rpx;
		margin-bottom: 20rpx;
	}

	.jz {
		color: #C0c0c0;
		text-align: center;
		margin-bottom: 80rpx;
	}

	.zdb {
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 0rpx;
		background-color: #FFFFFF;
		width: 100%;
		height: 60rpx;
		margin-left: -15rpx;
	}

	.jl {
		margin-left: 70rpx;
		margin-top: 5rpx;
	}

	.search_input {
		background-color: #e7e7e7;
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
</style>

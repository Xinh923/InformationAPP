<template>
	<view>
		<!-- 第一部分-顶部 -->
		<view class="items">
			<view class="item-xs">推荐</view>
			<view class="item">
				<view class="item-x" v-for="(item,i) in videotitle" :key="i+'vdtitle'">{{item.videotitle}}</view>
			</view>
		</view>

		<!-- 第二部分-视频1 -->
		<view class="sp" v-for="(item,i) in voidlist" :key="i+'video'">
			<view class="sp_content">{{item.adcontent}}</view>
			<video @click="videoinfo(item._id)" class="y" style="width: 100%;height: 400rpx;"
				:src="item.videosrc"></video>
			<view class="dibu">
				<view class="dibu_left">
					<view class="letf_image">
						<image style="width: 60rpx;height: 60rpx;border-radius: 50%;" :src="item.vdimage"></image>
					</view>
					<view class="vdauthor" style="font-size: 32rpx;">{{item.vdauthor}}</view>
					<view class="jg"></view>
					<view class="followad" style="font-size: 32rpx; color: #DD524D; font-weight: bold;">关注</view>
				</view>
				<view class="dibu_right">
					<view class="dz">
						<image style="width: 37rpx; height: 37rpx;" src="../../../static/comment.png"></image>
					</view>
					<view class="pl">
						<image style="width: 40rpx; height: 40rpx;" src="../../../static/good.png"></image>
					</view>
					<view class="gd">···</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				videotitle: [],
				voidlist: []
			}
		},
		onLoad() {
			this.getvideotitle();
		},
		onShow() {
			this.getvideolist();
		},
		methods: {
			getvideotitle() {
				uniCloud.callFunction({
					name: 'getVideotitle',
					success: (e) => {
						this.videotitle = e.result.data;
					}
				})
			},
			getvideolist() {
				uniCloud.callFunction({
					name: 'getVideolist',
					success: (e) => {
						this.voidlist = e.result.data;
					}
				})
			},
			videoinfo(_id) {
				uni.navigateTo({
					url: '../../videoinfo/videoinfo?id=' + _id
				})
			}
		}
	}
</script>

<style>
	/* 顶部 */
	.items {
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		z-index: 1;
		height: 70rpx;
		width: 2000rpx;
		top: 90rpx;
		margin-bottom: 30rpx;
		/* border: 1px solid red; */
	}

	.item {
		height: 60rpx;
		background-color: #ffffff;
		display: flex;
		flex-direction: row;
		margin: 5rpx 10rpx 20rpx 0rpx;
		font-size: 40rpx;
		color: #333333;
		margin-bottom: 20rpx;
		border-bottom: 1rpx solid #C8C7CC;
		/* border: 1px solid red; */

	}

	.item view {
		margin-left: 22rpx;
	}

	.item-xs {
		height: 60rpx;
		margin: 5rpx 0rpx 0rpx 10rpx;
		color: #DD524D;
		font-size: 40rpx;
		font-weight: bold;
		border-bottom: 1rpx solid #C8C7CC;
		/* border: 1px solid red; */
	}

	/* 视频 */
	.sp {
		border-bottom: 1rpx solid #e5eaf3;
		margin: 20rpx 10rpx 20rpx 10rpx;
		/* border: 1px solid red; */
	}

	.sp_content {
		font-size: 35rpx;
	}

	.tab_title view {
		display: inline-block;
		margin-left: 30rpx;
		line-height: 30rpx;
		color: #ffffff;
	}

	/* 视频作者 */
	.dibu {
		margin-top: 30rpx;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #acacac;
		/* border: 1px solid red; */
	}

	/* 左半边-头像-发布者-关注 */
	.dibu_left {
		display: inline-block;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
	}

	.letf_image {
		display: inline-block;
		float: left;
	}

	.vdauthor {
		display: inline;
		float: left;
		width: 200rpx;
		height: 50rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-left: 20rpx;
		padding-right: 20rpx;
		/* border-right: 1px solid #757575; */
	}

	.jg {
		display: inline;
		height: 38rpx;
		float: left;
		margin-top: 9rpx;
		text-align: center;
		border-right: 1px solid #757575;
	}

	.followad {
		display: inline;
		float: left;
		margin-left: 20rpx;
	}

	/* 右半部分-评论-点赞-更多 */
	.dibu_right {
		display: inline;
		height: 60rpx;
		float: right;
		text-align: center;
		line-height: 60rpx;
		margin-right: 20rpx;
		/* border: 1px solid red; */
	}

	.dz {
		display: inline;
		margin-right: 60rpx;
		/* border: 1px solid red; */
		float: left;
		margin-top: 9rpx;
	}

	.pl {
		display: inline;
		float: left;
		margin-top: 9rpx;
		margin-right: 60rpx;
		/* border: 1px solid red; */
	}

	.gd {
		display: inline;
		float: right;
		width: 40rpx;
		height: 40rpx;
		margin-right: 15rpx;
		margin-bottom: 2rpx;
	}
</style>

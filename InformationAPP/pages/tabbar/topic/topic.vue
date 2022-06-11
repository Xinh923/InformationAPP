<template>
	<view>
		<view>
			<!-- 顶部 话题榜 -->
			<view class="item">
				<navigator url="../pursue/pursue">
					<view class="item-x">追踪</view>
				</navigator>
				<navigator url="../topic1/topic1">
					<view class="item-x"><text class="item-xx">话题榜</text>
					</view>
				</navigator>
				<navigator url="../oppinions/oppinions">
					<view class="item-x">观点榜</view>
				</navigator>
				<view class="left">
					<input type="text" @input="searchNews" style="width: 180rpx;margin-right: 20rpx;font-size: 30rpx;"
						placeholder="搜索关键词" class="search_input"></input>
				</view>

			</view>
		</view>
		<view class="bt"></view>
		<!-- 话题1 -->
		<view class="ht" v-for="(item,i) in topiclist" :key="i+'topic'">
			<view>
				<image class="a" src="../../../static/footmark.png"></image>
			</view>
			<view class="hts">
				<view class="b"> <text class="item-xx">{{item.topictitle}}</text></view>
				<view class="c">
					{{item.topiccontent}}
				</view>
				<view class="d">
					<view class="hotimage">
						<image class="img1" src="../../../static/33.png"></image>
						<image class="img2" src="../../../static/33.png"></image>
						<image class="img3" src="../../../static/33.png"></image>
						<image class="img4" src="../../../static/33.png"></image>

					</view>
					<!-- 新闻1 -->
					<view class="hotimage-x">
						{{item.viewpoint}}观点
					</view>
					<view v-if="item.isdisplayhot===true" class="hotimage-y">
						{{item.ishot}}
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				topiclist: [],
				ishot: true
			}
		},
		onShow() {
			this.gettopiclist();
		},
		methods: {
			gettopiclist() {
				uniCloud.callFunction({
					name: 'getTopiclist',
					success: (e) => {
						this.topiclist = e.result.data;
					}
				})
			}
		}
	}
</script>

<style>
	.hotimage {
		margin-right: 120prx;
	}

	.hotimage-x {
		margin-left: 120rpx;
		margin-right: 15rpx;
		font-size: 25rpx;
	}

	.hotimage image {
		width: 30rpx;
		height: 30rpx;
		border-radius: 50%;
		position: absolute;
	}

	.hotimage .imgl {
		left: 20rpx;
	}

	.hotimage .img2 {
		left: 40rpx;
	}

	.hotimage .img3 {
		left: 60rpx;
	}

	.hotimage .img4 {
		left: 80rpx;
	}


	.hotimage .imgs {
		margin-left: 1000rpx;
	}

	.hotimage .img6 {
		margin-right: 700rpx;

	}

	.items {
		position: fixed;
		z-index: 1;
		background-color: #FFFFFF;
		width: 100%;
	}

	.bt {
		width: 100rpx;
		height: 10rpx;
	}

	.item {
		display: flex;
		/*显示在一行，弹性布局*/
		flex-direction: row;
		/*在一行显示、两个同时用才会显示在一-行*/
		margin: 5rpx 10rpx 20rpx 10rpx;
		font-size: 40rpx;
		color: #333333;
		background-color: #FFFFFF;
	}

	.item-x {
		margin-right: 45rpx;
	}

	.item-y {
		margin-top: 10rpx;
		margin-left: 180rpx;
	}

	.hotimage-y {
		border: 1rpx solid #DD524D;
		width: 30rpx;
		text-align: center;
		color: #DD524D;
		border-radius: 10rpx;
		font-size: 17rpx;
		height: 32rpx;
	}

	.hotimage-y1 {
		display: none;
		border: 1rpx solid #DD524D;
		width: 30rpx;
		text-align: center;
		color: #DD524D;
		border-radius: 10rpx;
		font-size: 17rpx;
		height: 32rpx;
	}

	.item-xx {
		font-weight: bold;
		/*文字体重加粗*/
	}

	.ht {
		border-bottom: 1rpx solid #CCD0D9;
		margin-bottom: -12rpx;
	}

	.checkbox-item {
		color: #DD524D;
		width: 20rpx;
		height: 20rpx;
	}

	.hts {
		margin-left: 20rpx;
	}

	.c {
		margin-top: 13rpx;
	}

	.a {
		width: 30rpx;
		height: 30rpx;
		margin-top: 13rpx;
	}

	.d {
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		margin-top: 13rpx;
	}

	.search_input {
		background-color: #ececec;
		border-radius: 40rpx;
		padding: 5rpx 30rpx 6rpx 30rpx;
		margin-right: 1rpx;
		color: #808080;
		/* text-align: center; */
	}
</style>

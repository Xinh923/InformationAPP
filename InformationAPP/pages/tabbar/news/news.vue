<template>
	<view>
		<!--顶部-新闻-->
		<view class="tab">
			<!--选项卡-->
			<view class="tab_title">
				<!--可滚动视图-->
				<scroll-view scroll-x="true" class="scroll_x">
					<view v-for="item in newsTitle" :key="item.id">{{item.titlename}}</view>
				</scroll-view>
			</view>
		</view>
		<view class="three">
			<view class="three-s">
				为您更新了15条内容
			</view>
		</view>
		<view class="twos">
			<view class="twoss">
				20°C 阴 南安 PM2.511
			</view>
			<view class="left">
				<input type="text" style="width: 180rpx;margin-right: 20rpx;font-size: 25rpx;" placeholder="搜索关键词"
					class="search_input"></input>
			</view>
		</view>

		<view class="d-three">
			<view class="xw-three">
				<view>
					2022,我们温暖的记忆
				</view>
				<view class="threes">
					<view class="j"><text class="zd">置顶</text></view>
					<view class="j">新闻联播</view>

					<view class="j">45评</view>
				</view>
			</view>
			<view class="xw-three">
				<view>
					森林大县59年无大火是怎么做到的
				</view>
				<view class="threes">
					<view class="j"><text class="zd">置顶</text></view>
					<view class="j">光明网</view>

					<view class="j">17评</view>
				</view>
			</view>
		</view>
		<!--新闻-1-->
		<navigator url="../nesinfo/newsinfo">
			<view class="d-three">
				<view class="d-threes">
					<view>
						<image style="width: 200rpx;height: 160rpx;" src="../../../static/2.jpg"></image>
					</view>
					<view class="d-threess">几年近疯狂，涉案金额超3亿，一个“背包客”牵出全国跨省“倒烟”大案</view>
				</view>
				<view>
					<view class="threess">大河网 38评</view>
				</view>
			</view>
		</navigator>
		<!--新闻-2-->
		<view class="d-three">
			<view class="d-threes">
				<view>
					<image style="width: 200rpx;height: 160rpx;" src="../../../static/2.jpg"></image>
				</view>
				<view class="d-threess">中国老年化水平加速，论养老保险在中国的重要性？人们应不应买保险？</view>
			</view>
			<view>
				<view class="threess">新京报官微 58评</view>
			</view>
		</view>
		<view class="d-three">
			<view class="d-threes">
				<view>
					<image style="width: 200rpx;height: 160rpx;" src="../../../static/2.jpg"></image>
				</view>
				<view class="d-threess">人们都喜欢聚在一起玩耍，人们聚在一起欢呼是好？是坏？</view>
			</view>
			<view>
				<view class="threess">烽火君 18评</view>
			</view>
		</view>
		<view class="d-three">
			<view>加微信交友群，喜欢就聊，找喜欢的人</view>
			<view class="d-threes">
				<view class="a">
					<image style="width: 200rpx;height: 160rpx;" src="../../../static/2.jpg"></image>
				</view>
				<view class="a">
					<image style="width: 200rpx;height: 160rpx;" src="../../../static/2.jpg"></image>
				</view>
				<view class="a">
					<image style="width: 200rpx;height: 160rpx;" src="../../../static/2.jpg"></image>
				</view>
			</view>
			<view class="threess">广告 我主良缘文化</view>
		</view>
		<view class="d-three">
			<view class="d-threes">
				<view>
					<image style="width: 200rpx;height: 160rpx;" src="../../../static/2.jpg"></image>
				</view>
				<view class="d-threess">随着经济发展，中国各个城市发展速度越来越快，经济发展迅速，人们幸福快乐</view>
			</view>
			<view>
				<view class="threess">时代发展 8评</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 资讯二级标题
				newsTitle: [],
			}
		},
		onLoad() {
			this.getnewstitle();
		},
		methods: {
			getnewstitle() {
				console.log('-- -- - 执行查询二级新闻标题-- -- - ');
				uniCloud.callFunction({
					name: 'newstitle',
					success: (e) => {
						console.log(e.result);
						this.newsTitle = e.result.data;
					}
				})
			}
		}
	}
</script>

<style>
	.search {
		display: flex;
		flex-direction: row;
	}

	.two {
		margin: 0rpx 40rpx 25rpx 30rpx;
		color: #FFFFFF;
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
	}

	.twos {
		color: #FFFFFF;
		display: flex;
		background-color: #DD524D;
		margin-top: -10rpx;
		width: 100%;
		justify-content: space-between;
		-webkit-justify-content: space-between;
		height: 70rpx;
	}

	.twoss {
		margin-left: 20rpx;
	}

	.reds {
		color: #DD524D;
		height: 40rpx;
	}

	.xw-three {}

	.three {
		width: 100%;
		height: 120rpx;
		background-color: #DD524D;
	}

	three-s {
		color: #FFFFFF;
	}

	.d-three {
		border-bottom: 1rpx solid #ccd0d9;
		margin: 20rpx 20rpx 20rpx 20rpx;
	}

	.d-threes {

		display: flex;
		flex-direction: row;
	}

	a {
		margin: 20 rpx 10rpx 10rpx 20rpx;
	}

	.d-threess {
		margin-left: 40rpx;
	}

	.threes {
		display: flex;
		flex-direction: row;
		margin: 5rpx 10rpx 10rpx 10rpx;
		font-size: 25rpx;
		color: #808080;
	}

	.j {
		margin-right: 25rpx;
	}

	.threess {
		margin-bottom: 20rpx;
		font-size: 25rpx;
		color: #808080;
	}

	.search .left {
		flex: 1;
		-webkit-flex: 1;
		margin-right: 70rpx;
		height: 10rpx;
	}

	.search .rigth {
		width: 120rpx;
	}

	.search_input {
		background-color: #F8F8F8;
		border-radius: 40rpx;
		padding: 5rpx 30rpx 6rpx 30rpx;
		margin-right: 1rpx;
	}

	.search_img {
		height: 48rpx;
		width: 48rpx;
	}

	/*==========选项卡=========*/
	.tab_title view {
		display: inline-block;
		margin-left: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		color: #FFFFFF;
	}

	.tab {
		background-color: #DD524D;
		height: 100rpx;
		position: fixed;
		z-index: 1;
		left: 0;
		right: 0;
		width: 100%;
		margin-top: 0rpx;
	}

	.zd {
		color: #DD524D;
	}

	.scroll_x {
		height: 60rpx;
		width: 100%;
		white-space: nowrap;
	}

	scroll-view::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
	}

	/*=========新闻列表========*/
	.news_list {
		margin: 200rpx 25rpx 25rpx 25rpx;
		position: absolute;
		padding-bottom: calc(var(--windeow-bottom));
		width: 100%;
	}

	.news-item {
		height: 150rpx;
		border-bottom: 1rpx solid #C8C7CC;
		display: flex;
		flex-direction: row;
		margin-bottom: 20rpx;
	}

	/*=========设置左边图片大小=========*/
	.news_list image {
		width: 180rpx;
		height: 140rpx;
		margin-right: 30rpx;
	}

	.news_list .title {
		font-size: 35rpx;
	}

	.news_list .time {
		color: #C0C0C0;
		font-size: 30rpx;
		margin-top: 15rpx;
	}
</style>

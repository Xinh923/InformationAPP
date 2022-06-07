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
				{{temperature}} {{weather}} {{city}} {{wind_direction}}
			</view>

			<view class="left">
				<input type="text" style="width: 180rpx;margin-right: 20rpx;font-size: 25rpx;" placeholder="搜索关键词"
					class="search_input"></input>
			</view>
		</view>

		<!-- 置顶新闻 -->
		<view class="d-three" v-for="(item,i) in newslist.slice(0,2)" :key="i+'only'">
			<view class="xw-three">
				<view style="margin-left: 5px;">
					{{item.newstitle}}
				</view>
				<view class="threes">
					<view class="j"><text class="zd">置顶</text></view>
					<view class="j">{{item.newssource}}</view>

					<view class="j">{{item.newsheat}}评</view>
				</view>
			</view>
		</view>

		<!--新闻列表-->
		<view class="d-three" v-for="(item,i) in newslist.slice(2,5)" :key="i">
			<view class="d-threes">
				<view>
					<image style="width: 200rpx;height: 160rpx;" :src="item.newsimage"></image>
				</view>
				<view class="d-threess">{{item.newstitle}}</view>
			</view>
			<view>
				<view class="threess">{{item.newssource}} {{item.newsheat}}评</view>
			</view>
		</view>

		<view class="d-three" v-for="item in ad" :key="item.id">
			<view>{{item.adtilte}}</view>
			<view class="d-threes">
				<view class="a">
					<image style="width: 200rpx;height: 160rpx;" :src="item.adimage1"></image>
				</view>
				<view class="a">
					<image style="width: 200rpx;height: 160rpx;" :src="item.adimage2"></image>
				</view>
				<view class="a">
					<image style="width: 200rpx;height: 160rpx;" :src="item.adimage3"></image>
				</view>
			</view>
			<view class="threess">广告 {{item.adsource}}</view>
		</view>

		<view class="d-three" v-for="(item,i) in newslist.slice(5)" :key="i">
			<view class="d-threes">
				<view>
					<image style="width: 200rpx;height: 160rpx;" :src="item.newsimage"></image>
				</view>
				<view class="d-threess">{{item.newstitle}}</view>
			</view>
			<view>
				<view class="threess">{{item.newssource}} {{item.newsheat}}评</view>
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
				newslist: [],
				city: '南安',
				weather: '',
				temperature: '',
				wind_direction: '',
				ad: {}
			}
		},
		onShow() {
			this.getnewstitle();
			this.sendGetWeather();
			this.getnewslist();
			this.getad();
		},
		methods: {
			// 获取顶部导航栏
			getnewstitle() {
				console.log('-- -- - 执行查询二级新闻标题-- -- - ');
				uniCloud.callFunction({
					name: 'newstitle',
					success: (e) => {
						console.log(e.result);
						this.newsTitle = e.result.data;
						// console.log(this.newsTitle);
					}
				})
			},
			// 获取天气
			sendGetWeather() {
				uni.request({
					url: 'http://wthrcdn.etouch.cn/weather_mini?city=' + this.city,
					method: 'GET',
					success: res => {
						this.weather = res.data.data.forecast[0].type;
						this.temperature = res.data.data.wendu + '°C';
						this.wind_direction = res.data.data.forecast[0].fengxiang;
						// console.log(this.weather + '------' + this.temperature + '-----' + this.wind_direction)
					},
					fail: () => {
						this.openmsg("警告", "天气接口获取失败")
					},
					complete: () => {}
				});
			},
			// 获取新闻数据
			getnewslist() {
				// console.log('------执行新闻资讯查询------');
				uniCloud.callFunction({
					name: 'getNews',
					success: (e) => {
						console.log(e);
						this.newslist = e.result.data;
						console.log(this.newslist);
					}
				})
			},
			getad() {
				console.log('-----执行广告查询操作-----');
				uniCloud.callFunction({
					name: 'getAd',
					success: (e) => {
						this.ad = e.result.data;
						console.log(this.ad);
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

	.three {
		width: 100%;
		height: 120rpx;
		background-color: #DD524D;
	}

	.three-s {
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

	.a {
		margin: 20rpx 20rpx 10rpx 0rpx;
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
		color: #808080;
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

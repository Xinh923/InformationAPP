<template>
	<!--顶部-新闻详情-->
	<view class="item">
		<view class="sh">
			<view>
				<image class="tp" :src="newsicon">
					<text class="wb">{{newstitle}}</text>
				</image>
			</view>
		</view>
		<view class="dhw">
			<view>
				<image class="tps" :src="newsheadimg" style="width: 110rpx; height: 110rpx;"></image>
			</view>
			<view>
				<view class="zt">{{newssource}}</view>
				<view class="rq">{{newstime}}</view>
			</view>
			<view v-bind:class="className" @click="gz()">{{follow}}</view>
		</view>
		<view class="items">
			<view style="text-align: center;margin-top: 15px;margin-bottom: 15px;">
				<image style="width: 600rpx;height: 300rpx;" :src="newsimage">
				</image>
			</view>
			<view>
				<text style="display: block; text-indent: 2em;">
					{{newscontent}}
				</text>
			</view>
			<view class="jd">校对 {{newsProofread}}</view>
		</view>

		<view class="pt">
			<view>
				<image style="width: 20rpx; height: 20rpx;" src="../../static/logo.png"></image>
			</view>
			<view class="ptjj">平台声明</view>
		</view>
		<!-- 精彩推荐 -->
		<view class="jc">
			<view class="jcs">精彩推荐</view>
		</view>
		<view class="xw" v-for="(item,i) in hotnews" :key="i+'hot'">
			<view>
				<view>{{item.hottitle}}</view>
				<view class="xwnr">
					<view class="xwnrs">{{item.hotsource}}</view>
					<view class="xwnrs">{{item.heat}}评</view>
				</view>
			</view>
			<view style="margin-bottom: 10px;">
				<image style="width: 200rpx;height: 150rpx; border-radius: 20rpx;margin-left: 10rpx;"
					:src="item.hotimage">
				</image>
			</view>
		</view>

		<!-- 评论区 -->
		<view class="jc">
			<view class="jcs">我来说两句</view>
		</view>
		<view style="color: #c5c5c5; margin-bottom: 30rpx; margin-left: 20rpx;">热门评论</view>
		<view class="pl" v-for="(item,i) in hotreview" :key="i+'hotview'">
			<view class="lp">
				<view class="pll">
					<view style=" display: inline-block;">
						<image style="width: 80rpx; height: 80rpx;border-radius: 50%;" :src="item.cmimage"></image>
					</view>
					<view style="margin-left: 20rpx;display: inline-block;">
						<view class="zt1">{{item.cmname}}</view>
						<view class="sj">
							<view class="sjs">{{item.cmtime}}</view>
							<view class="sjs">{{item.cmaddress}}</view>
						</view>
					</view>
					<view class="dz">
						<view class="plll">{{item.cmhot}}</view>
						<view class="plll">
							<image style="width: 30rpx;height: 30rpx;" src="../../static/good.png"></image>
						</view>
						<view class="plll">
							<image style="width: 30rpx;height: 30rpx;" src="../../static/comment.png"></image>
						</view>
					</view>
				</view>
				<view class="plcontent">{{item.cmcontent}}</view>
			</view>
		</view>

		<!--底部-->
		<view class="zdb">
			<view>
				<input type="text" style="width: 200rpx; margin-right: 20rpx;
				font-size: 25rpx;" placeholder="有和观点" class="search_input"></input>
			</view>
			<view class="jl">
				<image style="width: 40rpx; height: 40rpx;" src="../../static/comment.png"></image>
			</view>
			<view class="jl">
				<image style="width: 40rpx; height: 40rpx;" src="../../static/clloection.png"></image>
			</view>
			<view class="jl">
				<image style="width: 40rpx; height: 40rpx;" src="../../static/share.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				newstitle: "",
				newsimage: "",
				newscontent: "",
				newsheat: "",
				newssource: "",
				newsheadimg: "",
				newsicon: "",
				newstime: "",
				newsProofread: "",
				hotnews: [],
				follow: "+关注",
				className: "reg-rigth",
				hotreview: []
			}
		},
		onLoad(options) {
			console.log(options.id)
			this.getnewsId(options.id)
		},
		onShow() {
			this.getHotNews();
			this.getHotReview();
		},
		methods: {
			getnewsId(_id) {
				uniCloud.callFunction({
					name: 'getNewsId',
					data: {
						"id": _id
					},
					success: (e) => {
						console.log('新闻详情查找结果：' + e.result);
						this.newstitle = e.result.data[0].newstitle;
						this.newsimage = e.result.data[0].newsimage;
						this.newscontent = e.result.data[0].newscontent;
						this.newsheat = e.result.data[0].newsheat;
						this.newssource = e.result.data[0].newssource;
						this.newsheadimg = e.result.data[0].newsheadimg;
						this.newsicon = e.result.data[0].newsicon;
						this.newstime = e.result.data[0].newstime;
						this.newsProofread = e.result.data[0].newsProofread;
						// this.newname = e.result.data[0].newname,
					}
				})
			},
			getHotNews() {
				uniCloud.callFunction({
					name: 'getHotnews',
					success: (e) => {
						this.hotnews = e.result.data;
					}
				})
			},
			gz() {
				this.follow = "已关注";
				this.className = "check_class";
			},
			getHotReview() {
				uniCloud.callFunction({
					name: 'getHoretview',
					success: (e) => {
						this.hotreview = e.result.data;
					}
				})
			}
		}
	}
</script>

<style>
	.item {
		margin-left: 15rpx;
	}

	.items {
		margin: 20rpx 20rpx 20rpx 20rpx;
	}

	.zt {
		font-size: 35rpx;
		margin-top: 10rpx;
		margin-left: 15rpx;
	}

	.rq {
		font-size: 30rpx;
		color: #B9B9B9;
		margin-top: 5rpx;
		margin-left: 15rpx;
	}

	.sh {
		margin-right: 30rpx;
	}

	.tp {
		width: 50rpx;
		height: 50rpx;
		margin: 15rpx 20rpx -10rpx 0rpx;
	}

	.wb {
		font-size: 40rpx;
	}

	.dhw {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.tps {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.a {
		margin-top: 30rpx;
		margin-right: 30rpx;
	}

	.dhb {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.b {
		margin-top: 40rpx;
		margin-bottom: 40rpx;
		font-weight: bold;
	}

	.reg-rigth {
		background: #DD524D;
		height: 45rpx;
		border-radius: 60rpx;
		color: #FFFFFF;
		width: 120rpx;
		text-align: center;
		margin-top: 30rpx;
		margin-left: 100rpx;
		font-size: 30rpx;
	}

	.jd {
		margin-top: 40rpx;
	}

	.pt {
		margin: 30rpx 20rpx 40rpx 530rpx;
		color: #d9d9d9;
		font-size: 25rpx;
		display: flex;
		flex-direction: row;
	}

	.ptjj {
		margin-left: 10rpx;
	}

	.jc {
		background-color: #f05954;
		width: 160rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		height: 37rpx;
		margin-left: -15rpx;
		margin-bottom: 40rpx;
		border: 1px solid red;
	}

	.jcs {
		text-align: center;
		font-size: 25rpx;
	}

	.xw {
		display: flex;
		flex-direction: row;
		margin: 20rpx 20rpx 30rpx 5rpx;
		border-bottom: 1px solid #d0d0d0;
	}

	.xwnr {
		display: flex;
		flex-direction: row;
		color: #b9b9b9;
		font-size: 30rpx;
		margin-top: 10rpx;
	}

	.xwnrs {
		margin-right: 30rpx;
		font-size: 25rpx;
	}

	.xhx {
		border-bottom: 1rpx solid #C0C0C0;
		margin-bottom: 20rpx;
		margin-top: 50rpx;
		margin-right: 20rpx;
		margin-left: 110rpx;
	}

	.jz {
		color: #c0c0c0;
		margin-left: 110rpx;
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
	}

	.left {
		height: 10rpx;
		margin-left: 20rpx;
	}

	.search_input {
		background-color: #F8F8F8;
		border-radius: 40rpx;
		padding: 5rpx 30rpx 6rpx 30rpx;
		margin-right: 1rpx;
	}

	.jl {
		margin-left: 70rpx;
	}

	/* 评论区内容 */
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
		display: inline-block;
		margin-right: 60rpx;
		width: 30rpx;
		line-height: 30rpx;
		text-align: center;
		color: #999999;
	}

	.dz {
		float: right;
		margin-top: 10rpx;
		margin-right: 10rpx;
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

	/* 评论框 */
	.check_class {
		background: #A3A3A3;
		height: 45rpx;
		border-radius: 60rpx;
		color: #FFFFFF;
		width: 120rpx;
		text-align: center;
		margin-top: 30rpx;
		margin-left: 100rpx;
		font-size: 30rpx;
	}
</style>

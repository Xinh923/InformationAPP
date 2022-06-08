<template>
	<!--顶部-视频内容-->
	<view class="item">
		<view class="sh">
			<view>
				<image class="tp" src="../../static/2.jpg">
					<text class="wb">新闻标题</text>
				</image>
			</view>
		</view>
		<view class="dhw">
			<view>
				<image class="tps" src="../../static/2.jpg" style="width: 110rpx; height: 110rpx;"></image>
			</view>
			<view>
				<view class="zt">大河网</view>
				<view class="rq">12/12 10:53</view>
			</view>
			<view class="reg-rigth">+关注</view>
		</view>
		<view class="items">
			<view>
				<text>
					新闻
				</text>
			</view>
			<view class="jd">校对 刘军</view>
		</view>
		<view class="pt">
			<view>
				<image style="width: 20rpx; height: 20rpx;" src="../../static/logo.png"></image>
			</view>
			<view class="ptjj">平台声明</view>
		</view>
		<view class="jc">
			<view class="jcs">精彩推荐</view>
		</view>
		<view class="xw">
			<view>
				<view>单节24分，5个球</view>
				<view class="xwnr">
					<view class="xwnrs">科技搜狐</view>
					<view class="xwnrs">3434评</view>
				</view>
			</view>
			<view>
				<image style="width: 200rpx;height: 150rpx; border-radius: 20rpx;" src="../../static/2.jpg">
				</image>
			</view>
		</view>
		<view class="xws"></view>
		<view class="xw">
			<view>
				<view>单节24分，5个球</view>
				<view class="xwnr">
					<view class="xwnrs">科技搜狐</view>
					<view class="xwnrs">3434评</view>
				</view>
			</view>
			<view>
				<image style="width: 200rpx;height: 150rpx; border-radius: 20rpx;" src="../../static/2.jpg">
				</image>
			</view>
		</view>
		<view class="xws"></view>
		<view class="xws"></view>
		<view class="jc">
			<view class="jcs">我来说两句</view>
		</view>
		<view style="color: #c5c5c5; margin-bottom: 30rpx; margin-left: 20rpx;">热门评论</view>
		<view class="pl">
			<view>
				<image style="width: 80rpx; height: 80rpx;" src="../../static/2.jpg"></image>
			</view>
			<view class="lp">
				<view class="pll">
					<view>
						<view class="zt1">网友222222</view>
						<view class="sj">
							<view class="sjs">2小时钱</view>
							<view class="sjs">河北石家庄</view>
						</view>
					</view>
					<view class="pl">
						<view class="plll">7</view>
						<view class="plll">
							<image style="width: 30rpx;height: 30rpx;" src="../../static/good.png"></image>
						</view>
						<view class="plll">
							<image style="width: 30rpx;height: 30rpx;" src="../../static/good.png"></image>
						</view>
					</view>
				</view>
				<view class="pll">微笑生活，勇敢面对。</view>
			</view>
		</view>
		<view class="pl">
			<view>
				<image style="width: 80rpx; height: 80rpx;" src="../../static/2.jpg"></image>
			</view>
			<view class="lp">
				<view class="pll">
					<view>
						<view class="zt1">网友222222</view>
						<view class="sj">
							<view class="sjs">2小时钱</view>
							<view class="sjs">河北石家庄</view>
						</view>
					</view>
					<view class="pl">
						<view class="plll">7</view>
						<view class="plll">
							<image style="width: 30rpx;height: 30rpx;" src="../../static/good.png"></image>
						</view>
						<view class="plll">
							<image style="width: 30rpx;height: 30rpx;" src="../../static/good.png"></image>
						</view>
					</view>
				</view>
				<view class="pll">微笑生活，勇敢面对。</view>
			</view>
		</view>
		<view class="pl">
			<view>
				<image style="width: 80rpx; height: 80rpx;" src="../../static/2.jpg"></image>
			</view>
			<view class="lp">
				<view class="pll">
					<view>
						<view class="zt1">网友222222</view>
						<view class="sj">
							<view class="sjs">2小时钱</view>
							<view class="sjs">河北石家庄</view>
						</view>
					</view>
					<view class="pl">
						<view class="plll">7</view>
						<view class="plll">
							<image style="width: 30rpx;height: 30rpx;" src="../../static/good.png"></image>
						</view>
						<view class="plll">
							<image style="width: 30rpx;height: 30rpx;" src="../../static/good.png"></image>
						</view>
					</view>
				</view>
				<view class="pll">微笑生活，勇敢面对。</view>
			</view>
		</view>
		<view class="xhx"></view>
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

			}
		},
		onLoad(options) {
			console.log(options.id)
		},
		methods: {

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
		margin: 0rpx 20rpx -10rpx 0rpx;
	}

	.sj {
		color: #C8C7CC;
		font-size: 30rpx;
		display: flex;
		flex-direction: row;
	}

	.sjs {
		margin-right: 30rpx;
		font-size: 20rpx;
		margin-top: 5rpx;
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
		margin-left: 280rpx;
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
	}

	.jcs {
		text-align: center;
		font-size: 25rpx;
	}

	.xw {
		display: flex;
		flex-direction: row;
		margin: 20rpx 20rpx 20rpx 20rpx;
	}

	.xws {
		border-bottom: 1rpx solid #D0D0D0;
		margin-top: 20rpx;
		margin-bottom: 30rpx;
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

	.pl {
		display: flex;
		flex-direction: ;
		margin-right: -300rpx;
		margin-bottom: 40rpx;
	}

	.lp {
		margin-left: -30rpx;
	}

	.pll {
		display: flex;
		flex-direction: ;
		justify-content: space-between;
		-wekbet-justify-content: space-between;
		margin-left: 60rpx;
	}

	.plll {
		margin-right: 65rpx;
		color: #999999;
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

	.zt1 {
		font-size: 30rpx;
		color: #007AFF;
		margin-top: 10rpx;
	}
</style>

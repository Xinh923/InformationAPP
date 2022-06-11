<template>
	<view class="login-box">
		<view class="login-padBox">
			<view style="text-align: center; margin-bottom: 80rpx;"><text>登录</text></view>
			<view class="layout-box">
				<text>用户：</text>
				<input v-model="username" placeholder="请输入用户名" />
			</view>
			<view class="layout-box">
				<text>密码：</text>
				<input v-model="pwd" placeholder="请输入密码" password="true" />
			</view>
			<view class="buttn_div">
				<button @click="login()" type="primary" class="buttn_1">登录</button>
				<button @click="register()" type="warn" class="buttn_1">注册</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				pwd: '',
				name: '',
				checkpwd: '',
				nickname: ''
			}
		},
		methods: {
			register() {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			login() {
				uniCloud.callFunction({
					name: 'validateUser',
					data: {
						"username": this.username,
						"password": this.pwd
					}
				}).then(res => {
					if (res.result.affectedDocs == 1) {

						// uni.switchTab({
						// 	url: '../../tabbar/my/my'
						// });
						uni.reLaunch({
							url: '../../tabbar/my/my?nickname=' + res.result.data[0].nickname
						})
						uni.setTabBarItem({
							index: 3,
							text: '我的'
						})
					} else {
						uni.showToast({
							title: "用户名或密码错误！",
							duration: 1500,
							icon: "error"
						})
					}
				})
			}
		}
	}
</script>

<style>
	.login-box {
		height: 260upx;
		padding: 25upx;
		background: linear-gradient(to left, #FF978D, #FFBB69);
	}

	.login-padBox {
		background: #fff;
		border-radius: 12upx;
		padding: 60upx 25upx;
		box-shadow: 0 6upx 18upx rgba(0, 0, 0, 0.12);
		position: relative;
		margin-top: 120upx;
	}

	.layout-box {
		display: flex;
		flex-direction: row;
		height: 100rpx;
		line-height: 100rpx;
		align-items: center;
		margin: 20rpx;
		margin-left: 50rpx;
		/* background-color: #aa99ff; */

	}

	.layout-box input {
		background: #F2F5F6;
		font-size: 28upx;
		padding: 10upx 25upx;
		height: 62upx;
		line-height: 62upx;
		border-radius: 8upx;
		width: 63%;
	}

	.buttn_div {
		flex: 1;
		margin: 30rpx;
		margin-top: 90rpx;
	}

	.buttn_1 {
		margin: 20upx;
	}
</style>

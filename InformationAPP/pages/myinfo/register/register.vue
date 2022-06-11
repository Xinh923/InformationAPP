<template>
	<view>
		<view class="from">
			<view class="content ">
				<view class="forget-bg">
					<view class="forget-card">
						<view class=" forget-input forget-margin-b">
							<input type="text" placeholder="用户名" v-model="form.username" />
						</view>
						<view class=" forget-input forget-margin-b">
							<input type="text" placeholder="密码" v-model="form.password" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="昵称" v-model="form.nickname" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="手机号" v-model="form.mobile" />
						</view>
					</view>
				</view>
				<view class=" forget-btn">
					<button class="landing" type="primary" @click="submit()">注册</button>
					<button class="return" type="warn" @click="fanhui()">返回</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					username: "",
					password: "",
					nickname: "",
					mobile: ""
				}
			}
		},
		methods: {
			submit() {
				console.log("---------------执行注册操作");
				uniCloud.callFunction({
					name: 'addUser',
					data: this.form,
					success: (e) => {
						if (this.form.username.length == 0) {
							uni.showToast({
								icon: 'error',
								title: '用户名不能为空'
							})
							return false;
						} else if (this.form.password.length == 0) {
							uni.showToast({
								icon: 'error',
								title: '密码不能为空'
							})
							return false;
						} else if (this.form.nickname.length == 0) {
							uni.showToast({
								icon: 'error',
								title: '昵称不能为空'
							})
							return false;
						} else if (this.form.mobile.length == 0) {
							uni.showToast({
								icon: 'error',
								title: '手机号不能为空'
							})
							return false;
						} else {
							console.log(e.result);
							uni.showToast({
								title: '注册成功',
								duration: 2000
							});
							setTimeout(() => {
								uni.navigateBack({
									delta: 1
								})
							}, 1000)
						}

					},
				})
			},
			fanhui(e) {
				uni.redirectTo({
					url: "../login/login"
				})
			}
		}
	}
</script>

<style>
	.verify-left {
		widch: calc(100% - 260upx);
		float: left;
		padding-left: 20upx;
	}

	.landing {
		height: 84upx;
		line-height: 84upx;
		border-radius: 44upx;
		font-size: 32upx;
		/* background: linear-gradient(left, #FF978D, #FFBB69); */
	}

	.return {
		margin-top: 15rpx;
		height: 84upx;
		line-height: 84upx;
		border-radius: 44upx;
		font-size: 32upx;
		/* background: linear-gradient(left, #FF978D, #FFBB69); */
	}

	.forget-btn {
		padding: 10upx 20upx;
		margin-top: 480upx;
	}

	.forget-input input {
		background: #F2F5F6;
		font-size: 28upx;
		padding: 10upx 25upx;
		height: 62upx;
		line-height: 62upx;
		border-radius: 8upx;
	}

	.forget-margin-b {
		margin-bottom: 25upx;
	}

	.forget-input {
		padding: 10upx 20upx;
		overflow: auto;
	}

	.forget-card {
		background: #fff;
		border-radius: 12upx;
		padding: 60upx 25upx;
		box-shadow: 0 6upx 18upx rgba(0, 0, 0, 0.12);
		position: relative;
		margin-top: 120upx;
	}


	.forget-bg {
		height: 260upx;
		padding: 25upx;
		background: linear-gradient(to left, #FF978D, #FFBB69);
	}
</style>

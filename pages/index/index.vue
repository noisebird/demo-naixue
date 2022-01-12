<template>
	<scroll-view :refresher-triggered="trigger" :refresher-threshold="200" :scroll-top="scrollTop" scroll-y="true"
		class="scroll-Y" :refresher-enabled="true" @refresherrefresh="refreshPulling">
		<view class="naixue-swaper-wrapper">
			<view class="naixue-swaper-section">
				<view class="naixue-swaper-content">
					<swiper class="swiper-height" :indicator-dots="indicatorDots" :autoplay="autoplay"
						:interval="interval" :duration="duration">
						<swiper-item>
							<image class="header-bg" src="../../static/bg2.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image class="header-bg" src="../../static/bg3.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image class="header-bg" src="../../static/bg4.jpg"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<button v-if="false" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">触发code</button>
		<view class="naixue-container">
			<view class="naixue-account-info">
				<view class="account-item user-info-item">
					<image class="user-avator" src="../../static/bg2.jpeg"></image>
					<view class="user-experience">
						<text>亲爱的用户</text>
						<view style="display: flex; align-items: center;">
							<view class="experience-progress">
								<view class="inner-progress"></view>
							</view>
							<text class="experience-value">58/100</text>
						</view>

					</view>
				</view>
				<view class="account-item account-info-item">
					<view><text>58</text><text>积分</text>
					</view>
					<view>
						<text>0</text>
						<text>奈雪分</text>
					</view>
					<view>
						<text>58</text>
						<text>积分</text>
					</view>

				</view>
			</view>
			<view class="food-way-container">
				<view class="food-container">
					<view class="food-content">
						<image src="../../static/self-get.png"></image>
						<text class="font-18">自取</text>
						<text class="food-description">预约点单，到店自取1</text>
					</view>
					<view class="food-content">
						<image src="../../static/out-sales.png"></image>
						<text class="font-18">外卖</text>
						<text class="food-description">快速送达，限时配送</text>
					</view>
				</view>

				<view class="food-tip">
					<view>
						<image src="../../static/drink-together.png"></image>
						<text>一起喝</text>
					</view>
					<text>微信支付满88，随机立减15-88元</text>
				</view>
			</view>

			<view class="naixue-ad">
				<view class="ad-card">
					<view class="ad-card-title">奈雪的茶商城</view>
					<view class="ad-card-description">好茶随行 美好常在</view>
					<image src="../../static/bg2.jpeg"></image>
				</view>
				<view class="ad-card">
					<view class="ad-card-title">储值有礼</view>
					<view class="ad-card-description">储值300立赠1杯</view>
					<image src="../../static/bg2.jpeg"></image>
				</view>

				<view class="ad-card">
					<view class="ad-card-title">积分商城</view>
					<view class="ad-card-description">兑限量周边</view>
					<image src="../../static/bg2.jpeg"></image>
				</view>

			</view>

			<view class="vip-recommend">
				<view class="vip-title">
					<text>会员新鲜事</text>
					<text>更多 > </text>
				</view>
				<view class="vip-card">
					<image src="../../static/vip-ad1.jpg"></image>
				</view>
				<view class="vip-card">
					<image src="../../static/vip-ad2.jpg"></image>
				</view>
			</view>
		</view>
	</scroll-view>

	<!-- <view class="redirect-btn" @click="redirect">跳转到新页面</view>
	<view class="redirect-btn" @click="scan">扫码</view> -->

</template>

<script>
	import {
		defineComponent,
		ref
	} from 'vue';

	export default defineComponent({
		setup() {
			const platformInfo = wx.getSystemInfoSync();
			const currentMenu = ref('home');
			const safeHeight = platformInfo.screenHeight - platformInfo.safeArea.bottom;
			const pages = getCurrentPages();
			return {
				scrollTop: ref(0),
				trigger: ref(false),
				safeHeight,
				currentMenu,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			};
		},
		methods: {
			refreshPulling: function(e) {
				if (!e.detail.scrollTop) {
					console.log(e)
					this.trigger = true;
					setTimeout(() => {
						this.trigger = false;
						console.log(this.trigger);
					}, 500)
				}

			},
			redirect() {
				uni.navigateTo({
					url: '/pages/index/detail'
				});
				uni.showTabBar({

				})
			},
			switchMenu(value) {
				this.currentMenu = value;
			},
			scan() {
				uni.chooseAddress({
					success(res) {
						console.log(res.userName)
						console.log(res.postalCode)
						console.log(res.provinceName)
						console.log(res.cityName)
						console.log(res.countyName)
						console.log(res.detailInfo)
						console.log(res.nationalCode)
						console.log(res.telNumber)
					}
				})
				// uni.openSetting({
				//   success(res) {
				//     console.log(res.authSetting)
				//   }
				// });

				// uni.getProvider({
				// 	service: 'oauth',
				// 	success(data) {
				// 		console.log(data, '1111111');
				// 	}
				// })
				// uni.showToast({
				//     title: '我是超出七个字符串的标题',
				// 	icon: 'error',
				// 	position: 'bottom',
				//     duration: 2000
				// });
				// uni.showLoading({
				//     title: '加载中',
				// 	mask: false
				// });

				// uni.showModal({
				//     title: '提示',
				//     content: '这是一个模态弹窗',
				//     success: function (res) {
				//         if (res.confirm) {
				//             console.log('用户点击确定');
				//         } else if (res.cancel) {
				//             console.log('用户点击取消');
				//         }
				//     }
				// });

				// uni.showActionSheet({
				// 	itemList: ['A', 'B', 'C'],
				// 	success: function(res) {
				// 		console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				// 	},
				// 	fail: function(res) {
				// 		console.log(res.errMsg);
				// 	}
				// });

				// uni.setScreenBrightness({
				//     value: 0.5,
				//     success: function () {
				//         console.log('success');
				//     }
				// });
				// uni.startSoterAuthentication({
				// 	requestAuthModes: ['facial'],
				// 	challenge: '123456',
				// 	authContent: '请用指纹解锁',
				// 	success(res) {
				// 		console.log(res);
				// 	},
				// 	fail(err) {
				// 		console.log(err);
				// 	},
				// 	complete(res) {
				// 		console.log(res);
				// 	}
				// });
				// uni.addPhoneContact({
				//     nickName: '昵称',
				//     lastName: '姓',
				//     firstName: '名',
				//     remark: '备注',
				//     mobilePhoneNumber: '10086',
				//     weChatNumber: 'wx123',
				//     success: function () {
				//         console.log('success');
				//     },
				//     fail: function () {
				//         console.log('fail');
				//     }
				// });
				// uni.makePhoneCall({
				//     phoneNumber: '10086' //仅为示例
				// });
				// uni.scanCode({
				// 	success(data) {
				// 		console.log(data, '1111111')
				// 		uni.navigateTo({
				// 			url: data.result,
				// 			success() {
				// 				console.log('......')
				// 			}
				// 		})
				// 	}
				// })
			},
			getPhoneNumber(e) {
				console.log(e);
				uni.login({
					provider: 'weixin',
					success: (res) => {

						const code = res.code;
						uni.getUserInfo({
							success: (res) => {
								uni.request({
									url: `http://10.209.125.175:8080/wechat/user/phoneNumber/${e.detail.code}`,
									method: 'GET',
									header: {
										appId: 'wx843c377fdcbab4c7',
										secret: '139e27897388c5216a1cd0cb5aef7a8a'

									}
								})
								console.log(res, 'user info......');
							}
						})
					}
				})
			}
		}
	})
</script>

<style scoped lang="scss">
	.naixue-swaper-wrapper {
		// height: 400px;
	}

	.container {
		flex: 1;
	}

	.header-bg {
		width: 100%;
		height: 360px;
	}

	.swiper-height {
		height: 360px;
	}

	.naixue-container {
		display: flex;
		flex-direction: column;
		padding: 12px;
		flex: 1;
	}

	.naixue-account-info {
		display: flex;
		justify-content: space-between;
		padding: 10px 8px;

		.user-info-item {
			// width: 200px;
		}

		.account-item {
			display: flex;
			align-items: center;
			height: 40px;
		}

		.user-avator {
			width: 30px;
			height: 30px;
			border-radius: 30px;
		}
	}

	.user-experience {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 40px;
		margin-left: 12px;

		text {
			font-size: 12px;
		}

		.experience-progress {
			height: 4px;
			background-color: #C0C0C0;
			border-radius: 12px;
			width: 80px;
			margin-right: 8px;
		}

		.inner-progress {
			background-color: #18BC37;
			width: 40%;
			height: 100%;
			border-radius: 12px;
		}
	}

	.account-info-item {
		view {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 24px;
			font-size: 12px;
			height: 40px;
		}
	}

	.food-way-container {
		border-radius: 3px;
		padding: 24px 24px 12px 24px;
		background-color: #FFFFFF;
	}

	.food-container {
		display: flex;


		.food-content {
			display: flex;
			width: 50%;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 64px;
				height: 64px;
			}

			text {
				font-size: 14px;
			}

			.font-18 {
				font-size: 18px;
				margin: 4px 0 4px 0;
			}
		}

		.food-content:first-child {
			border-right: 1px solid #e5e5e5;
		}
	}

	.food-tip {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		align-items: center;
		border-top: 1px solid #e5e5e5;
		padding-top: 12px;
		margin-top: 16px;

		image {
			width: 20px;
			height: 20px;
		}
	}

	.food-tip>view {
		display: flex;
		align-items: center;
	}

	.food-tip>view>image {
		margin-right: 4px;
	}

	.food-tip>text {
		color: #B9B9B9;
	}

	.food-description {
		color: #B9B9B9;
		font-size: 12px;
	}

	.naixue-ad {
		display: flex;
		flex-wrap: nowrap;
		margin-top: 12px;
	}

	.ad-card {
		margin-right: 8px;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		padding: 12px;

		image {
			width: 80px;
			height: 80px;
		}
	}

	.ad-card-title {
		font-size: 14px;
		font-weight: bold;
		text-align: center;
	}

	.ad-card-description {
		font-size: 12px;
		color: #B9B9B9;
		text-align: center;
		margin: 4px 0;
	}

	.ad-card:last-child {
		margin-right: 0;
	}

	.vip-recommend {
		margin-top: 12px;
	}

	.scroll-Y {
		height: 100%;
	}

	.vip-title {
		display: flex;
		justify-content: space-between;

		text:first-child {
			font-size: 14px;
			font-weight: bold;
		}

		text:last-child {
			font-size: 12px;
			color: #B9B9B9;
		}
	}

	.vip-card {
		border-radius: 8px;
		margin-top: 8px;
	}

	.vip-card image {
		height: 120px;
		width: 100%;
		border-radius: 8px;
	}
</style>

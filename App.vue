<script lang="ts">
	import {
		defineComponent
	} from 'vue';
	export default defineComponent({
		setup() {
			uni.setTabBarStyle({
				color: '#666',
				selectedColor: '#62f52e',
				backgroundImage: '',
				borderStyle: 'white'
			});
			uni.showTabBarRedDot({
				index: 1,
				text: '1'	
			})
			uni.setTabBarBadge({
				text: '1',
				index: 3
			})
			// uni.showModal({
			// 	content: '此操作需要授权，请前往授权！',
			// 	showCancel: true,
			// 	buttonText: '确定',
			// 	success: (info) => {
			// 		console.log(info, '.....');
			// 		uni.getUserProfile({
			// 			desc: "获取你的昵称、头像、地区及性别",
			// 			success: userinfo => {
			// 				console.log(userinfo);
			// 				// this.classlogin = 'hiden'
			// 				// this.nickname = ''
			// 				uni.setStorageSync('userinfo', userinfo.userInfo)
			// 				uni.navigateTo({
			// 					url: '../login/login'
			// 				})
			// 			},
			// 			fail: error => {
			// 				uni.navigateTo({
			// 					url: '../login/login'
			// 				})
			// 			},
			// 		})
			// 	},
			// })
		}
	})
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
